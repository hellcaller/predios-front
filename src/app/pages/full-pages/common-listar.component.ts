import { Directive, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { Generic } from 'app/models/generic';
import { CommonService } from 'app/services/common.service';

@Directive()
export abstract class CommonListarComponent<E extends Generic, S extends CommonService<E>> implements OnInit {

  titulo: string;
  lista: E[];
  protected nombreModel: string;
  totalRegistros = 0;
  paginaActual = 0;
  totalPorPagina = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected service: S) { }

  ngOnInit() {
    this.calcularRangos();
  }

  paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }

  private calcularRangos() {
    this.service.listarPaginas(this.paginaActual.toString(), this.totalPorPagina.toString())
      .subscribe(p => {
        this.lista = p.content as E[];
        this.totalRegistros = p.totalElements as number;
        this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      });
  }

  public eliminar(e: E): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar ${this.nombreModel} con id ${e.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(e.id).subscribe(() => {
          this.calcularRangos();
          Swal.fire(
            'Eliminado: ',
            `${this.nombreModel} con id ${e.id} eliminado con éxito`,
            'success'
          );
        });
      }
    });
  }
}
