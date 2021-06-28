import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  obterClientes() {
    this.http
      .get('http://localhost:3000/clientes')
      .subscribe((resposta) => console.log(resposta));
  }
}
