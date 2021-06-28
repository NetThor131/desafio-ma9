import { Component, OnInit } from '@angular/core';

import { Cliente } from '@data/models';
import { ClientesService } from '@data/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService
      .obterClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }
}
