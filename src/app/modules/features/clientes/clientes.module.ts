import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AdicionarComponent
  ],
  imports: [CommonModule, ClientesRoutingModule],
})
export class ClientesModule {}
