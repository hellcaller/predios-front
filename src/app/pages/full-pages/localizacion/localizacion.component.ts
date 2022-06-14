import { Component, OnInit } from '@angular/core';
import { Localizacion } from '../../../models/localizacion';
import { CommonListarComponent } from '../common-listar.component';
import { LocalizacionService } from '../../../services/localizacion.service';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.scss']
})
export class LocalizacionComponent extends CommonListarComponent<Localizacion, LocalizacionService> implements OnInit {

  constructor(service: LocalizacionService) {
    super(service);
    this.titulo = 'Listado de localizaciones';
    this.nombreModel = 'Localizacion';
  }

}
