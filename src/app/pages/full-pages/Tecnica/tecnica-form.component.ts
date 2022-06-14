import { Component, OnInit } from '@angular/core';
import { Tecnica } from '../../../models/tecnica';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicaService } from 'app/services/tecnica.service';

@Component({
  selector: 'app-info-fiscal-form',
  templateUrl: './tecnica-form.component.html',
  styleUrls: ['./tecnica-form.component.scss']
})
export class TecnicaFormComponent extends CommonFormComponent<Tecnica, TecnicaService> implements OnInit {

  constructor(service: TecnicaService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear información técnica";
    this.model = new Tecnica();
    this.redirect = '/pages/tecnica';
    this.nombreModel = 'Tecnica';

  }

}