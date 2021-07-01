import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Cliente } from '@data/models';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
})
export class FormClienteComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() initialValue?: Cliente;
  @Output() formSubmit = new EventEmitter();

  // Campos
  cpf: string;
  nome: string;
  sexo: string;
  dat_nasc: string;
  email: string;
  phone: string;

  ngOnInit(): void {
    if (this.initialValue) {
      this.nome = this.initialValue.nome;
      this.cpf = this.initialValue.cpf;
      this.sexo = this.initialValue.sexo;
      this.dat_nasc = this.initialValue.dat_nasc;
      this.email = this.initialValue.email;
      this.phone = this.initialValue.phone;
    }
  }

  submit(form: NgForm) {
    const { value } = form;
    this.formSubmit.emit(value);
  }
}
