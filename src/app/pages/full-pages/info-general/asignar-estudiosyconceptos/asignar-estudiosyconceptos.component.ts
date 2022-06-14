import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InfoGeneral } from 'app/models/info-general';
import { EstudiosyConceptos } from 'app/models/estudiosyConceptos';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoGeneralService } from '../../../../services/info-general.service';
import { EstudiosyconceptosService } from '../../../../services/estudiosyconceptos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-estudiosyconceptos',
  templateUrl: './asignar-estudiosyconceptos.component.html',
  styleUrls: ['./asignar-estudiosyconceptos.component.scss']
})
export class AsignarEstudiosyconceptosComponent implements OnInit {

  infoGeneral: InfoGeneral;
  estudioConceptoAsignar: EstudiosyConceptos[] = [];
  estudioConcepto: EstudiosyConceptos[] = [];

  dataSource: MatTableDataSource<EstudiosyConceptos>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'estudiotitulos', 'elaboradopor', 'fecharealizacion'];
  mostrarColumnasEstudioConcepto: string[] = ['id', 'estudiotitulos', 'elaboradopor', 'fecharealizacion',
    'limitacion', 'descripcion', 'versiondoc', 'anexos'];
  seleccion: SelectionModel<EstudiosyConceptos> = new SelectionModel<EstudiosyConceptos>(true, []);

  constructor(private route: ActivatedRoute,
    private infoGeneralService: InfoGeneralService,
    private estudiosyconceptosService: EstudiosyconceptosService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoGeneralService.ver(id).subscribe(ifg => {
        this.infoGeneral = ifg;
        this.estudioConcepto = this.infoGeneral.estudios_y_conceptos;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<EstudiosyConceptos>(this.estudioConcepto);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.estudiosyconceptosService.filtrar(termino)
        .subscribe(estcon => this.estudioConceptoAsignar = estcon.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.informacion_fiscal.forEach
          this.estudioConcepto.forEach(infAsig => {
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
    const numEstudioConcepto = this.estudioConceptoAsignar.length;
    return (seleccionados === numEstudioConcepto);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.estudioConceptoAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarEstudiosYConcepto(): void {
    this.infoGeneralService.asignarEstudiosYConceptos(this.infoGeneral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Estudios y conceptos asignados al predio ${this.infoGeneral.nombre_predio}`,
          'success'
        );
        this.estudioConcepto = this.estudioConcepto.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.estudioConceptoAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar los estudios y conceptos seleccionados al predio ${this.infoGeneral.nombre_predio} porque ya está asociada a otro predio.`,
                'error'
              );
            }
          }
        });
  }

  eliminarEstudiosYConcepto(estudiosyConceptos: EstudiosyConceptos): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar los estudios y conceptos seleccionados del predio ${this.infoGeneral.nombre_predio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoGeneralService.eliminarEstudiosYConceptos(this.infoGeneral, estudiosyConceptos)
          .subscribe(infoGeneral => {
            this.estudioConcepto = this.estudioConcepto.filter(estcon => estcon.id !== estudiosyConceptos.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Estudios y conceptos eliminados del predio ${this.infoGeneral.nombre_predio} con éxito.`,
              'success'
            );
          });
      }
    });
  }
}
