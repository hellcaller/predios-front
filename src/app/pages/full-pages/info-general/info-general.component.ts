import { Component, OnInit } from '@angular/core';
import { InfoGeneral } from '../../../models/info-general';
import { InfoGeneralService } from '../../../services/info-general.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})

export class InfoGeneralComponent extends CommonListarComponent<InfoGeneral, InfoGeneralService> implements OnInit {

  constructor(service: InfoGeneralService) {
    super(service);
    this.titulo = 'Listado de predios';
    this.nombreModel = 'Predio';
  }

}
