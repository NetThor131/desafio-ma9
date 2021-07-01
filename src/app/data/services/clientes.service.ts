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

  adicionarCliente(cliente: Cliente) {
    const body = {
      cpf: cliente.cpf,
      nome: cliente.nome,
      sexo: cliente.sexo,
      dat_nasc: cliente.dat_nasc,
      email: cliente.email,
      phone: cliente.phone,
    };

    return this.http.post(`${API_URL}/clientes`, body);
  }

  excluirCliente(idCliente: number) {
    return this.http.delete(`${API_URL}/clientes/${idCliente}`);
  }

  obterUmCliente(idCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_URL}/clientes/${idCliente}`);
  }
}
