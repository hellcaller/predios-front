import { Component, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoCatastral } from '../../../models/info-catastral';
import { InfoCatastralService } from '../../../services/info-catastral.service';

@Component({
  selector: 'app-info-catastral-form',
  templateUrl: './info-catastral-form.component.html',
  styleUrls: ['./info-catastral-form.component.scss']
})
export class InfoCatastralFormComponent extends CommonFormComponent<InfoCatastral, InfoCatastralService> implements OnInit {

  constructor(service: InfoCatastralService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear información catastral";
    this.model = new InfoCatastral();
    this.redirect = '/pages/info-catastral';
    this.nombreModel = 'InfoCatastral';

  }

}
