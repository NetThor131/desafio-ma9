import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarComponent } from './pages/adicionar';
import { VisualizarComponent } from './pages/visualizar';

@NgModule({
  declarations: [AdicionarComponent, VisualizarComponent],
  imports: [CommonModule, ClientesRoutingModule],
})
export class ClientesModule {}
