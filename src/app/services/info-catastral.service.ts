import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { Observable } from 'rxjs';
import { InfoCatastral } from '../models/info-catastral';
import { Propiedad } from '../models/propiedad';

@Injectable({
  providedIn: 'root'
})
export class InfoCatastralService extends CommonService<InfoCatastral>{

  protected baseEndpoint = BASE_ENDPOINT + '/informacion-catastral';

  constructor(http: HttpClient) {
    super(http);
  }

  public filtrar(termino: String): Observable<InfoCatastral[]> {
    return this.http.get<InfoCatastral[]>(`${this.baseEndpoint}/filtrar/${termino}`);
  }

  asignarPropiedad(infoCatastral: InfoCatastral, propiedad: Propiedad[]): Observable<InfoCatastral> {
    return this.http.put<InfoCatastral>(`${this.baseEndpoint}/${infoCatastral.id}/asignar-propiedad`, propiedad, { headers: this.cabeceras });
  }

  eliminarPropiedad(infoCatastral: InfoCatastral, propiedad: Propiedad): Observable<InfoCatastral> {
    return this.http.put<InfoCatastral>(`${this.baseEndpoint}/${infoCatastral.id}/eliminar-propiedad`, propiedad, { headers: this.cabeceras });
  }

}
