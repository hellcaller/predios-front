import { Component, OnInit } from '@angular/core';
import { InfoGeneral } from '../../../models/info-general';
import { InfoGeneralService } from '../../../services/info-general.service';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})

export class InfoGeneralComponent implements OnInit {

  titulo: string = 'Lista de predios';
  /*predios: InfoGeneral[] = [{
    id: 1,
    adquisicion: "1",
    chip: "2022ERT567-B",
    convenio_adquisicion: "1",
    declaratoria_publica: "1",
    destinacion: "1",
    estado: "1",
    forma_adquisicion: "1",
    nombre_predio: "Prueba",
    numero_especifico: "15234",
    proyecto_sda: "1",
    tipo_activo: "1",
    tipo_bien: "Privado",
  }];*/

  predios: InfoGeneral[];

  constructor(protected service: InfoGeneralService) { }

  ngOnInit() {
    this.getPredios();
  }

  public getPredios() {
    this.service.listar().subscribe(p => {
      console.log(p);
      this.predios = p as InfoGeneral[];
      console.log(this.predios);
    });
  }

}
