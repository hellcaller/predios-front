import { Injectable } from '@angular/core';
import { Localizacion } from '../models/localizacion';
import { BASE_ENDPOINT } from '../config/app';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService extends CommonService<Localizacion>{

  protected baseEndpoint = BASE_ENDPOINT + '/localizacion';

  constructor(http: HttpClient) {
    super(http);
  }

  public filtrar(termino: String): Observable<Localizacion[]> {
    return this.http.get<Localizacion[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }

}
