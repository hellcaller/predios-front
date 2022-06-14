import { Component, OnInit } from '@angular/core';
import { InfoCatastral } from '../../../models/info-catastral';
import { InfoCatastralService } from '../../../services/info-catastral.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-info-catastral',
  templateUrl: './info-catastral.component.html',
  styleUrls: ['./info-catastral.component.scss']
})
export class InfoCatastralComponent extends CommonListarComponent<InfoCatastral, InfoCatastralService> implements OnInit {

  constructor(service: InfoCatastralService) {
    super(service);
    this.titulo = 'Listado de información catastral';
    this.nombreModel = 'InfoCatastral';
  }

}
