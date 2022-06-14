import { Component, OnInit } from '@angular/core';
import { Adquisicion } from '../../../models/adquisicion';


import { CommonListarComponent } from '../common-listar.component';
import { BASE_ENDPOINT } from 'app/config/app';
import { AdquisicionService } from 'app/services/adquisicion.service';

@Component({
  selector: 'app-adquisicion',
  templateUrl: './adquisicion.component.html',
  styleUrls: ['./adquisicion.component.scss']
})

export class AdquisicionComponent extends CommonListarComponent<Adquisicion, AdquisicionService> implements OnInit {

  baseEndpoint = BASE_ENDPOINT + '/adquisicion';

  constructor(service: AdquisicionService) {
    super(service);
    this.titulo = 'Listado de Adquisicion';
    this.nombreModel = 'Adquisicion';
  }

}
