import { Component, OnInit } from '@angular/core';
import { InfoFiscalService } from '../../../services/info-fiscal.service';
import { InfoFiscal } from '../../../models/info-fiscal';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-fiscal-form',
  templateUrl: './info-fiscal-form.component.html',
  styleUrls: ['./info-fiscal-form.component.scss']
})
export class InfoFiscalFormComponent extends CommonFormComponent<InfoFiscal, InfoFiscalService> implements OnInit {

  constructor(service: InfoFiscalService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear información financiera";
    this.model = new InfoFiscal();
    this.redirect = '/pages/info-fiscal';
    this.nombreModel = 'InfoFinanciera';

  }

}
