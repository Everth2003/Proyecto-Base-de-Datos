import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajero } from '../modelos/viajeros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajerosService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/viajeros/`
  constructor(
    private http:HttpClient
  ) { }

  getAllViajero(){
    return this.http
    .get<Viajero[]>(this.base_path)
  }

  createCliente(data: any): Observable<Viajero> {
    return this.http.post<Viajero>(this.base_path, data);
  }

  deleteViajero(id: number): Observable<Viajero> {
    return this.http.delete<Viajero>(`${this.base_path}${id}/`);
  }
}
