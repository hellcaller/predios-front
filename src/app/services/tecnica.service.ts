import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { InfoGeneral } from '../models/info-general';
import { Tecnica } from '../models/tecnica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicaService extends CommonService<Tecnica>{

  protected baseEndpoint = BASE_ENDPOINT + '/tecnica';

  constructor(http: HttpClient) {
    super(http);
  }

  verInfotecnica(id: number): Observable<Tecnica> {
    return this.http.get<Tecnica>(`${this.baseEndpoint}/${id}`);
  }

  public filtrar(termino: String): Observable<Tecnica[]> {
    return this.http.get<Tecnica[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }

}
