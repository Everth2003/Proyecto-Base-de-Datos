import { Injectable } from '@angular/core';
import { Origen } from '../modelos/origen';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrigenService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/origen/`
  constructor(
    private http:HttpClient
  ) { }

  getAllOrigen(){
    return this.http
    .get<Origen[]>(this.base_path)
  }

  createOrigen(data: any): Observable<Origen> {
    return this.http.post<Origen>(this.base_path, data);
  }
}
