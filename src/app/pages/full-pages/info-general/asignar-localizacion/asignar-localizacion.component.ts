import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { InfoGeneral } from '../../../../models/info-general';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoGeneralService } from '../../../../services/info-general.service';
import { LocalizacionService } from '../../../../services/localizacion.service';
import { Localizacion } from '../../../../models/localizacion';

@Component({
  selector: 'app-asignar-localizacion',
  templateUrl: './asignar-localizacion.component.html',
  styleUrls: ['./asignar-localizacion.component.scss']
})
export class AsignarLocalizacionComponent implements OnInit {

  infoGeneral: InfoGeneral;
  localizacionAsignar: Localizacion[] = [];
  localizacion: Localizacion[] = [];

  dataSource: MatTableDataSource<Localizacion>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'tipo_suelo', 'upl', 'localidad'];
  mostrarColumnasLocalizacion: string[] = ['id', 'tipo_suelo', 'upl', 'localidad', 'upz_upr', 'nombre', 'componente_eep',
    'categoria_eep', 'elemento_eep', 'nombre_eep', 'sector_eep', 'sector', 'brebestart', 'eliminar'];
  seleccion: SelectionModel<Localizacion> = new SelectionModel<Localizacion>(true, []);

  constructor(private route: ActivatedRoute,
    private infoGeneralService: InfoGeneralService,
    private localizacionService: LocalizacionService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoGeneralService.ver(id).subscribe(ifg => {
        this.infoGeneral = ifg;
        this.localizacion = this.infoGeneral.localizacion;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Localizacion>(this.localizacion);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.localizacionService.filtrar(termino)
        .subscribe(loc => this.localizacionAsignar = loc.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.propiedad.forEach
          this.localizacion.forEach(infAsig => {
            if (inf.id === infAsig.id) {
              filtrar = false;
            }
          });
          return filtrar;
        }));
    }
  }

  estanTodosSeleccionados(): boolean {
    const seleccionados = this.seleccion.selected.length;
    const numLocalizacion = this.localizacionAsignar.length;
    return (seleccionados === numLocalizacion);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.localizacionAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarLocalizacion(): void {
    this.infoGeneralService.asignarLocalizacion(this.infoGeneral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Localización asignada al predio ${this.infoGeneral.nombre_predio}`,
          'success'
        );
        this.localizacion = this.localizacion.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.localizacionAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar la localización seleccionada al predio ${this.infoGeneral.nombre_predio} porque ya está asociada a otro predio.`,
                'error'
              );
            }
          }
        });
  }

  eliminarLocalizacion(localizacion: Localizacion): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la localización seleccionada del predio ${this.infoGeneral.nombre_predio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoGeneralService.eliminarLocalizacion(this.infoGeneral, localizacion)
          .subscribe(infoGeneral => {
            this.localizacion = this.localizacion.filter(loc => loc.id !== localizacion.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Localización eliminada del predio ${this.infoGeneral.nombre_predio} con éxito.`,
              'success'
            );
          });
      }
    });
  }

}
