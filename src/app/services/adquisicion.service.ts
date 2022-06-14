import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from 'app/config/app';
import { InfoGeneral } from '../models/info-general';
import { Adquisicion } from '../models/adquisicion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdquisicionService extends CommonService<Adquisicion>{

  protected baseEndpoint = BASE_ENDPOINT + '/adquisicion';

  constructor(http: HttpClient) {
    super(http);
  }

  verInfoadquisicion(id: number): Observable<Adquisicion> {
    return this.http.get<Adquisicion>(`${this.baseEndpoint}/${id}`);
  }

}
