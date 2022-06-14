import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoCatastral } from '../../../../../models/info-catastral';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Propiedad } from '../../../../../models/propiedad';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoCatastralService } from '../../../../../services/info-catastral.service';
import { PropiedadService } from '../../../../../services/propiedad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-propiedad',
  templateUrl: './asignar-propiedad.component.html',
  styleUrls: ['./asignar-propiedad.component.scss']
})
export class AsignarPropiedadComponent implements OnInit {

  infoCatastral: InfoCatastral;
  propiedadAsignar: Propiedad[] = [];
  propiedad: Propiedad[] = [];

  dataSource: MatTableDataSource<Propiedad>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'predio_matriz_remanente', 'matricula_inmobiliaria', 'cod_catastral'];
  mostrarColumnasPropiedad: string[] = ['id', 'predio_matriz_remanente', 'matricula_inmobiliaria', 'cod_catastral',
    'chip2', 'ved_catastral', 'propant', 'tipoiden', 'numiden', 'telcontacto', 'correo', 'eliminar'];
  seleccion: SelectionModel<Propiedad> = new SelectionModel<Propiedad>(true, []);

  constructor(private route: ActivatedRoute,
    private infoCatastralService: InfoCatastralService,
    private propiedadService: PropiedadService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoCatastralService.ver(id).subscribe(ifc => {
        this.infoCatastral = ifc;
        this.propiedad = this.infoCatastral.propiedad;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Propiedad>(this.propiedad);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.propiedadService.filtrar(termino)
        .subscribe(prop => this.propiedadAsignar = prop.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.informacion_catastral.forEach(infAsig => {
          this.propiedad.forEach(infAsig => {
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
    const numPropiedad = this.propiedadAsignar.length;
    return (seleccionados === numPropiedad);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.propiedadAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarPropiedad(): void {
    this.infoCatastralService.asignarPropiedad(this.infoCatastral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Propiedad asignada a la información catastral con id ${this.infoCatastral.id}`,
          'success'
        );
        this.propiedad = this.propiedad.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.propiedadAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar la propiedad seleccionada a la información catastral con id ${this.infoCatastral.id} porque ya está asociada a otra información catastral.`,
                'error'
              );
            }
          }
        });
  }

  eliminarPropiedad(propiedad: Propiedad): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la propiedad seleccionada de la información catastral con id ${this.infoCatastral.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoCatastralService.eliminarPropiedad(this.infoCatastral, propiedad)
          .subscribe(infoCatastral => {
            this.propiedad = this.propiedad.filter(prop => prop.id !== propiedad.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Propiedad eliminada de la información catastral ${this.infoCatastral.id} con éxito.`,
              'success'
            );
          });
      }
    });
  }

}
