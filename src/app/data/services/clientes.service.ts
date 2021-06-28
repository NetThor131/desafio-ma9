import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '@data/models';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  clientes: Cliente[];

  constructor(private http: HttpClient) {}

  obterClientes(): Cliente[] {
    this.http
      .get<Cliente[]>(`${API_URL}/clientes`)
      .subscribe((clientes) => (this.clientes = clientes));

    return this.clientes;
  }
}
