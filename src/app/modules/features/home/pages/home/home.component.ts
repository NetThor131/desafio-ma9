import { Component, OnInit } from '@angular/core';
import { ClientesService } from '@data/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private clientesService: ClientesService) {
    this.clientesService.obterClientes();
  }

  ngOnInit(): void {}
}
