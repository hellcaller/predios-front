import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { InfoGeneral } from '../models/info-general';
import { InfoFiscal } from '../models/info-fiscal';
import { Observable } from 'rxjs';
import { InfoCatastral } from '../models/info-catastral';
import { Localizacion } from '../models/localizacion';
import { EstudiosyConceptos } from 'app/models/estudiosyConceptos';
import { Tecnica } from 'app/models/tecnica';

@Injectable({
  providedIn: 'root'
})
export class InfoGeneralService extends CommonService<InfoGeneral>{

  protected baseEndpoint = BASE_ENDPOINT + '/informacion-general';

  constructor(http: HttpClient) {
    super(http);
  }

  asignarInfoFiscal(infoGeneral: InfoGeneral, infoFiscal: InfoFiscal[]): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/asignar-informacion-fiscal`, infoFiscal, { headers: this.cabeceras });
  }

  eliminarInfoFiscal(infoGeneral: InfoGeneral, infoFiscal: InfoFiscal): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/eliminar-informacion-fiscal`, infoFiscal, { headers: this.cabeceras });
  }

  asignarInfoCatastral(infoGeneral: InfoGeneral, infoCatastral: InfoCatastral[]): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/asignar-informacion-catastral`, infoCatastral, { headers: this.cabeceras });
  }

  eliminarInfoCatastral(infoGeneral: InfoGeneral, infoCatastral: InfoCatastral): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/eliminar-informacion-catastral`, infoCatastral, { headers: this.cabeceras });
  }

  asignarLocalizacion(infoGeneral: InfoGeneral, localizacion: Localizacion[]): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/asignar-localizacion`, localizacion, { headers: this.cabeceras });
  }

  eliminarLocalizacion(infoGeneral: InfoGeneral, localizacion: Localizacion): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/eliminar-localizacion`, localizacion, { headers: this.cabeceras });
  }

  verInfopredio(id: number): Observable<InfoGeneral> {
    return this.http.get<InfoGeneral>(`${this.baseEndpoint}/${id}`);
  }
  asignarEstudiosYConceptos(infoGeneral: InfoGeneral, estudioConcepto: EstudiosyConceptos[]): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/asignar-estudiosyconceptos`, estudioConcepto, { headers: this.cabeceras });
  }

  eliminarEstudiosYConceptos(infoGeneral: InfoGeneral, estudioConcepto: EstudiosyConceptos): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/eliminar-estudiosyconceptos`, estudioConcepto, { headers: this.cabeceras });
  }

  asignarTecnica(infoGeneral: InfoGeneral, tecnica: Tecnica[]): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/asignar-tecnica`, tecnica, { headers: this.cabeceras });
  }

  eliminarTecnica(infoGeneral: InfoGeneral, tecnica: Tecnica): Observable<InfoGeneral> {
    return this.http.put<InfoGeneral>(`${this.baseEndpoint}/${infoGeneral.id}/eliminar-tecnica`, tecnica, { headers: this.cabeceras });
  }


}
