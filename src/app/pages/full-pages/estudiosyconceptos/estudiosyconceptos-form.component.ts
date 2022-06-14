import { Component, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiosyConceptos } from 'app/models/estudiosyConceptos';
import { EstudiosyconceptosService } from 'app/services/estudiosyconceptos.service';



@Component({
  selector: 'app-info-fiscal-form',
  templateUrl: './estudiosyconceptos-form.component.html',
  styleUrls: ['./estudiosyconceptos-form.component.scss']
})
export class EstudiosyconceptosFormComponent extends CommonFormComponent<EstudiosyConceptos, EstudiosyconceptosService> implements OnInit {

  constructor(service: EstudiosyconceptosService,
    router: Router,
    route: ActivatedRoute) {

    super(service, router, route);
    this.titulo = "Crear información estudios y conceptos";
    this.model = new EstudiosyConceptos();
    this.redirect = '/pages/estudiosyconceptos';
    this.nombreModel = 'estudiosyconceptos';

  }

}
