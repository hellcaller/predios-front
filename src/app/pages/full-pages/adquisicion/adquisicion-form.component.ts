import { Component, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Adquisicion } from 'app/models/adquisicion';
import { AdquisicionService } from 'app/services/adquisicion.service';




@Component({
  selector: 'app-adquisicion-form',
  templateUrl: './adquisicion-form.component.html',
  styleUrls: ['./adquisicion-form.component.scss']
})
export class AdquisicionFormComponent extends CommonFormComponent<Adquisicion, AdquisicionService> implements OnInit {

  constructor(service: AdquisicionService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear información Adquisición";
    this.model = new Adquisicion();
    this.redirect = '/pages/adquisicion';
    this.nombreModel = 'adquisicion';

  }

}