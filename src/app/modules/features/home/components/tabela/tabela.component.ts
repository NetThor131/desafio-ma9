import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '@data/models';
import { ClientesService } from '@data/services';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.clientesService
      .obterClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  deletarCliente(cliente: Cliente) {
    this.clientesService
      .excluirCliente(cliente.id)
      .pipe(
        finalize(() => {
          this.clientes = this.clientes.filter(
            (valorCliente) => valorCliente.id !== cliente.id
          );
        })
      )
      .subscribe(() => {
        this.toast.success('Cliente removido com sucesso!');
      });
  }
}
