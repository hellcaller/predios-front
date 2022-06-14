import { Component, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common-form.component';
import { Localizacion } from '../../../models/localizacion';
import { LocalizacionService } from '../../../services/localizacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-localizacion-form',
  templateUrl: './localizacion-form.component.html',
  styleUrls: ['./localizacion-form.component.scss']
})
export class LocalizacionFormComponent extends CommonFormComponent<Localizacion, LocalizacionService> implements OnInit {

  constructor(service: LocalizacionService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear localizacion";
    this.model = new Localizacion();
    this.redirect = '/pages/localizacion';
    this.nombreModel = 'Localizacion';

  }
}
