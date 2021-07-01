import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { ClientesService } from '@data/services';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent {
  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  adicionarCliente(form: NgForm) {
    const { value } = form;

    this.clientesService
      .adicionarCliente(value)
      .pipe(
        finalize(() => {
          this.router.navigate(['']);
        })
      )
      .subscribe(() => {
        alert('Usuário Adicionado');
      });
  }
}
