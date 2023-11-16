import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../modelos/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/viajes/`
  constructor(
    private http:HttpClient
  ) { }

  getAllViaje(){
    return this.http
    .get<Viaje[]>(this.base_path)
  }

  createViaje(data: any): Observable<Viaje> {
    return this.http.post<Viaje>(this.base_path, data);
  }
}
