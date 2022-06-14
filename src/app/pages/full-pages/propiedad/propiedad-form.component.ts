import { Component, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common-form.component';
import { Propiedad } from '../../../models/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedad-form',
  templateUrl: './propiedad-form.component.html',
  styleUrls: ['./propiedad-form.component.scss']
})
export class PropiedadFormComponent extends CommonFormComponent<Propiedad, PropiedadService> implements OnInit {

  constructor(service: PropiedadService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear propiedad";
    this.model = new Propiedad();
    this.redirect = '/pages/propiedad';
    this.nombreModel = 'Propiedad';

  }

}
