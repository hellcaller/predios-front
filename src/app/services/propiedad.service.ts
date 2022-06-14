import { Injectable } from '@angular/core';
import { Propiedad } from '../models/propiedad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from '../config/app';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService extends CommonService<Propiedad>{

  protected baseEndpoint = BASE_ENDPOINT + '/propiedad';

  constructor(http: HttpClient) {
    super(http);
  }

  public filtrar(termino: String): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }

}
