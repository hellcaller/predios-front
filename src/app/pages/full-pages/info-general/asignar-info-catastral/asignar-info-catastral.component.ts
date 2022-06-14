import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoCatastralService } from '../../../../services/info-catastral.service';
import { InfoCatastral } from '../../../../models/info-catastral';
import { SelectionModel } from '@angular/cdk/collections';
import { InfoGeneralService } from '../../../../services/info-general.service';
import { InfoGeneral } from '../../../../models/info-general';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asignar-info-catastral',
  templateUrl: './asignar-info-catastral.component.html',
  styleUrls: ['./asignar-info-catastral.component.scss']
})
export class AsignarInfoCatastralComponent implements OnInit {

  infoGeneral: InfoGeneral;
  infoCatastralAsignar: InfoCatastral[] = [];
  infoCatastral: InfoCatastral[] = [];

  dataSource: MatTableDataSource<InfoCatastral>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'sector_catastral', 'codigo_catastral', 'direccion_catastral'];
  mostrarColumnasInfoCatastral: string[] = ['id', 'sector_catastral', 'codigo_catastral', 'direccion_catastral',
    'chip', 'cedula_catastral', 'dest_catastral', 'add_propiedad', 'eliminar'];
  seleccion: SelectionModel<InfoCatastral> = new SelectionModel<InfoCatastral>(true, []);

  constructor(private route: ActivatedRoute,
    private infoGeneralService: InfoGeneralService,
    private infoCatastralService: InfoCatastralService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoGeneralService.ver(id).subscribe(ifg => {
        this.infoGeneral = ifg;
        this.infoCatastral = this.infoGeneral.informacion_catastral;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<InfoCatastral>(this.infoCatastral);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.infoCatastralService.filtrar(termino)
        .subscribe(infc => this.infoCatastralAsignar = infc.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.informacion_catastral.forEach(infAsig => {
          this.infoCatastral.forEach(infAsig => {
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
    const numInfoCatastral = this.infoCatastralAsignar.length;
    return (seleccionados === numInfoCatastral);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.infoCatastralAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarInfoCatastral(): void {
    this.infoGeneralService.asignarInfoCatastral(this.infoGeneral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Información catastral asignada al predio ${this.infoGeneral.nombre_predio}`,
          'success'
        );
        this.infoCatastral = this.infoCatastral.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.infoCatastralAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar la información catastral seleccionada al predio ${this.infoGeneral.nombre_predio} porque ya está asociada a otro predio.`,
                'error'
              );
            }
          }
        });
  }

  eliminarInfoCatastral(infoCatastral: InfoCatastral): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la información catastral seleccionada del predio ${this.infoGeneral.nombre_predio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoGeneralService.eliminarInfoCatastral(this.infoGeneral, infoCatastral)
          .subscribe(infoGeneral => {
            this.infoCatastral = this.infoCatastral.filter(infc => infc.id !== infoCatastral.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Información catastral eliminada del predio ${this.infoGeneral.nombre_predio} con éxito.`,
              'success'
            );
          });
      }
    });
  }
}