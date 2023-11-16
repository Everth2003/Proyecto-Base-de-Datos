import { Injectable } from '@angular/core';
import { referenciaFamiliar } from '../modelos/referencia-familiares';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaFamiliarService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/referencias_familiares/`
  constructor(
    private http:HttpClient
  ) { }

  getAllReferencia(){
    return this.http
    .get<referenciaFamiliar[]>(this.base_path)
  }

  createReferencia(data: any): Observable<referenciaFamiliar> {
    return this.http.post<referenciaFamiliar>(this.base_path, data);
  }
}
