import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { ClientesService } from '@data/services';
import { Cliente } from '@data/models';
import { FormClienteComponent } from '../../components/form-cliente';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent implements OnInit {
  @ViewChild(FormClienteComponent) form: FormClienteComponent;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  adicionarCliente(cliente: Cliente) {
    this.clientesService
      .adicionarCliente(cliente)
      .pipe(
        finalize(() => {
          this.router.navigate(['']);
        })
      )
      .subscribe(() => {
        this.toast.success('Cliente inserido com sucesso!');
      });
  }
}
