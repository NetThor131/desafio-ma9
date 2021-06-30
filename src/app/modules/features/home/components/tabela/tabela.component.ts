import { Component, OnInit } from '@angular/core';

import { Cliente } from '@data/models';
import { ClientesService } from '@data/services';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService
      .obterClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }
}
