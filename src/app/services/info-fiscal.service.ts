import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { InfoFiscal } from 'app/models/info-fiscal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoFiscalService extends CommonService<InfoFiscal>{

  protected baseEndpoint = BASE_ENDPOINT + '/informacion-fiscal';

  constructor(http: HttpClient) {
    super(http);
  }

  public filtrar(termino: String): Observable<InfoFiscal[]> {
    return this.http.get<InfoFiscal[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }

}
