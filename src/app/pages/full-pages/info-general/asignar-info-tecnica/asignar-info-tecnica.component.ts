import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoGeneral } from 'app/models/info-general';
import { Tecnica } from '../../../../models/tecnica';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoGeneralService } from '../../../../services/info-general.service';
import { TecnicaService } from '../../../../services/tecnica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-info-tecnica',
  templateUrl: './asignar-info-tecnica.component.html',
  styleUrls: ['./asignar-info-tecnica.component.scss']
})
export class AsignarInfoTecnicaComponent implements OnInit {

  infoGeneral: InfoGeneral;
  infoTecnicaAsignar: Tecnica[] = [];
  infoTecnica: Tecnica[] = [];

  dataSource: MatTableDataSource<Tecnica>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tabIndex = 0;

  mostrarColumnas: string[] = ['seleccion', 'id', 'areaterreno', 'escrituraha', 'escrituraam2'];
  mostrarColumnasInfoTecnica: string[] = ['id', 'areaterreno', 'escrituraha', 'escrituraam2', 'certtradlib', 'certtradlibm2',
    'levantopo', 'certcablin', 'uaecdm2', 'areaaquid', 'escrituram2'];
  seleccion: SelectionModel<Tecnica> = new SelectionModel<Tecnica>(true, []);

  constructor(private route: ActivatedRoute,
    private infoGeneralService: InfoGeneralService,
    private infoTecnicaService: TecnicaService,
    protected router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.infoGeneralService.ver(id).subscribe(ifg => {
        this.infoGeneral = ifg;
        this.infoTecnica = this.infoGeneral.tecnica;
        this.iniciarPaginador();
      });
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Tecnica>(this.infoTecnica);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  filtrar(termino: String): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.infoTecnicaService.filtrar(termino)
        .subscribe(inft => this.infoTecnicaAsignar = inft.filter(inf => {
          let filtrar = true;
          //this.infoGeneral.informacion_fiscal.forEach
          this.infoTecnica.forEach(infAsig => {
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
    const numInfoTecnica = this.infoTecnicaAsignar.length;
    return (seleccionados === numInfoTecnica);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.infoTecnicaAsignar.forEach(row => this.seleccion.select(row));
  }

  asignarInfoTecnica(): void {
    this.infoGeneralService.asignarTecnica(this.infoGeneral, this.seleccion.selected)
      .subscribe(infg => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados: ',
          `Infomarción técnica asignada al predio ${this.infoGeneral.nombre_predio}`,
          'success'
        );
        this.infoTecnica = this.infoTecnica.concat(this.seleccion.selected);
        this.iniciarPaginador();
        this.infoTecnicaAsignar = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf("ConstraintViolationException") > -1) {
              Swal.fire(
                'Cuidado: ',
                `No se puede asignar la información técnica seleccionada al predio ${this.infoGeneral.nombre_predio} porque ya está asociada a otro predio.`,
                'error'
              );
            }
          }
        });
  }

  eliminarInfoTecnica(tecnica: Tecnica): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la información técnica seleccionada del predio ${this.infoGeneral.nombre_predio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.infoGeneralService.eliminarTecnica(this.infoGeneral, tecnica)
          .subscribe(infoGeneral => {
            this.infoTecnica = this.infoTecnica.filter(inft => inft.id !== tecnica.id);
            this.iniciarPaginador();
            Swal.fire(
              'Eliminado: ',
              `Información técnica eliminada del predio ${this.infoGeneral.nombre_predio} con éxito.`,
              'success'
            );
          });
      }
    });
  }

}
