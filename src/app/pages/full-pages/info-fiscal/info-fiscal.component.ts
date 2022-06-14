import { Component, OnInit } from '@angular/core';
import { InfoFiscal } from '../../../models/info-fiscal';
import { InfoFiscalService } from '../../../services/info-fiscal.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-info-fiscal',
  templateUrl: './info-fiscal.component.html',
  styleUrls: ['./info-fiscal.component.scss']
})
export class InfoFiscalComponent extends CommonListarComponent<InfoFiscal, InfoFiscalService> implements OnInit {

  constructor(service: InfoFiscalService) {
    super(service);
    this.titulo = 'Listado de información financiera';
    this.nombreModel = 'InfoFinanciera';
  }
}
