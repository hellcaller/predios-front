import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { EstudiosyConceptos } from '../models/estudiosyConceptos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosyconceptosService extends CommonService<EstudiosyConceptos>{

  protected baseEndpoint = BASE_ENDPOINT + '/estudios';

  constructor(http: HttpClient) {
    super(http);
  }

  verInfoestudiosyconceptos(id: number): Observable<EstudiosyConceptos> {
    return this.http.get<EstudiosyConceptos>(`${this.baseEndpoint}/${id}`);
  }

  public filtrar(termino: String): Observable<EstudiosyConceptos[]> {
    return this.http.get<EstudiosyConceptos[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }


}
