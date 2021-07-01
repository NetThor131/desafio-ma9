import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '@data/models';
import { ClientesService } from '@data/services';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  cliente$: Observable<Cliente>;

  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.cliente$ = this.clientesService.obterUmCliente(this.id);
  }

  editarCliente(cliente: Cliente) {
    this.clientesService
      .editarCliente(cliente, this.id)
      .pipe(
        finalize(() => {
          this.router.navigate(['']);
        })
      )
      .subscribe(() => {
        this.toast.success('Cliente alterado com sucesso!');
      });
  }
}
