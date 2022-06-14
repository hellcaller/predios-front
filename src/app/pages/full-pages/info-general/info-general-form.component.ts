import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from '../../../services/info-general.service';
import { InfoGeneral } from '../../../models/info-general';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-general-form',
  templateUrl: './info-general-form.component.html',
  styleUrls: ['./info-general-form.component.scss']
})

export class InfoGeneralFormComponent extends CommonFormComponent<InfoGeneral, InfoGeneralService> implements OnInit {

  constructor(service: InfoGeneralService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear Predios";
    this.model = new InfoGeneral();
    this.redirect = '/pages/info-general';
    this.nombreModel = 'Predio';

  }


}
