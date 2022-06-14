import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../../models/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.scss']
})
export class PropiedadComponent extends CommonListarComponent<Propiedad, PropiedadService> implements OnInit {

  constructor(service: PropiedadService) {
    super(service);
    this.titulo = 'Listado de propiedad';
    this.nombreModel = 'Propiedad';
  }

}
