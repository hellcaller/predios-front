import { Component, OnInit } from '@angular/core';
import { Tecnica } from '../../../models/tecnica';
import { TecnicaService } from '../../../services/tecnica.service';

import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from 'app/config/app';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.scss']
})

export class TecnicaComponent extends CommonListarComponent<Tecnica, TecnicaService> implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/tecnica';

  constructor(service: TecnicaService) {
    super(service);
    this.titulo = 'Listado de info Tecnica';
    this.nombreModel = 'Tecnica';
  }

}
