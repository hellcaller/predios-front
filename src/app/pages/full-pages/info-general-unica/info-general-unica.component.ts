import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoGeneralService } from '../../../services/info-general.service';
import { InfoGeneral } from '../../../models/info-general';

@Component({
  selector: 'app-info-general-unica',
  templateUrl: './info-general-unica.component.html',
  styleUrls: ['./info-general-unica.component.scss']
})
export class InfoGeneralUnicaComponent implements OnInit {

  infoGeneral: InfoGeneral;

  constructor(private route: ActivatedRoute, private service: InfoGeneralService) { }

  ngOnInit() {
    this.verInfopredio();
  }

  verInfopredio() {
    try {
      this.route.paramMap.subscribe(params => {
        const id: number = +params.get('id');
        //console.log("HELLOOOOO:", id);
        this.service.verInfopredio(+id).toPromise().then(data => {
          this.infoGeneral = data;
          //console.log("DATAAAA " + data);
        })

      })
    } catch (error) {
      console.error('ERORRR', error);
    }

  }

}
