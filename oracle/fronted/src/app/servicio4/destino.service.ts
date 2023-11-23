import { Injectable } from '@angular/core';
import { Destino } from '../modelos/destino';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/destino/`
  constructor(
    private http:HttpClient
  ) { }

  getAllDestino(){
    return this.http
    .get<Destino[]>(this.base_path)
  }

  createDestino(data: any): Observable<Destino> {
    return this.http.post<Destino>(this.base_path, data);
  }
}
