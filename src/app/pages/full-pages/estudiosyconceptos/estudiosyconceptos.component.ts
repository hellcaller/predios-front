import { Component, OnInit } from '@angular/core';
import { EstudiosyConceptos } from '../../../models/estudiosyConceptos';


import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from 'app/config/app';
import { EstudiosyconceptosService } from 'app/services/estudiosyConceptos.service';

@Component({
  selector: 'app-estudiosyconceptos',
  templateUrl: './estudiosyconceptos.component.html',
  styleUrls: ['./estudiosyconceptos.component.scss']
})

export class EstudiosyconceptosComponent extends CommonListarComponent<EstudiosyConceptos, EstudiosyconceptosService> implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/estudios';

  constructor(service: EstudiosyconceptosService) {
    super(service);
    this.titulo = 'Listado de estudios';
    this.nombreModel = 'EstudiosyConceptos';
  }

}
