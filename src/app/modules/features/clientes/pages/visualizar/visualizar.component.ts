import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ClientesService } from '@data/services';
import { Cliente } from '@data/models';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
})
export class VisualizarComponent implements OnInit {
  cliente$: Observable<Cliente>;

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.cliente$ = this.clientesService.obterUmCliente(id);
  }
}
