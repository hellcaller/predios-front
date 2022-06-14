import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoFiscalService } from '../../../../services/info-fiscal.service';
import { InfoFiscal } from '../../../../models/info-fiscal';
import { SelectionModel } from '@angular/cdk/collections';
import { InfoGeneralService } from '../../../../services/info-general.service';
import { InfoGeneral } from '../../../../models/info-general';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asignar-info-fiscal',
  templateUrl: './asignar-info-fiscal.component.html',
  styleUrls: ['./asignar-info-fiscal.component.scss']
})
export class AsignarInfoFiscalComponent implements OnInit {

  infoGeneral: InfoGeneral;
  infoFiscalAsignar: InfoFiscal[] = [];
  infoFiscal: InfoFiscal[] = [];

  dataSource: MatTableDataSource<InfoFiscal>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'remision_informacion', 'remision_emitido', 'fecha_remision'];
  mostrarColumnasinfoFiscal: string[] = ['id', 'remision_informacion', 'remision_emitido', 'fecha_remision',
    'memorando_remision', 'observaciones', 'notificaciones', 'eliminar'];
  seleccion: SelectionModel<InfoFiscal> = new SelectionModel<InfoFiscal>(true, []);

  constructor(private route: ActivatedRoute,
    private infoGeneralService: InfoGeneralService,
    private infoFiscalService: InfoFiscalService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoGeneralService.ver(id).subscribe(ifg => {
        this.infoGeneral = ifg;
        this.infoFiscal = this.infoGeneral.informacion_fiscal;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<InfoFiscal>(this.infoFiscal);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.infoFiscalService.filtrar(termino)
        .subscribe(inff => this.infoFiscalAsignar = inff.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.informacion_fiscal.forEach
          this.infoFiscal.forEach(infAsig => {
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
    const numInfoFiscal = this.infoFiscalAsignar.length;
    return (seleccionados === numInfoFiscal);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.infoFiscalAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarInfoFiscal(): void {
    this.infoGeneralService.asignarInfoFiscal(this.infoGeneral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Infomarción fiscal asignada al predio ${this.infoGeneral.nombre_predio}`,
          'success'
        );
        this.infoFiscal = this.infoFiscal.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.infoFiscalAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar la información fiscal seleccionada al predio ${this.infoGeneral.nombre_predio} porque ya está asociada a otro predio.`,
                'error'
              );
            }
          }
        });
  }

  eliminarInfoFiscal(infoFiscal: InfoFiscal): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la información fiscal seleccionada del predio ${this.infoGeneral.nombre_predio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoGeneralService.eliminarInfoFiscal(this.infoGeneral, infoFiscal)
          .subscribe(infoGeneral => {
            this.infoFiscal = this.infoFiscal.filter(inff => inff.id !== infoFiscal.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Información fiscal eliminada del predio ${this.infoGeneral.nombre_predio} con éxito.`,
              'success'
            );
          });
      }
    });
  }
}