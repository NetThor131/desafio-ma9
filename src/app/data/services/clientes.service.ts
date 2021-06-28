import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '@data/models';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  obterClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_URL}/clientes`);
  }
}
