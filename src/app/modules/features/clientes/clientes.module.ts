import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarComponent } from './pages/adicionar';
import { VisualizarComponent } from './pages/visualizar';

@NgModule({
  declarations: [AdicionarComponent, VisualizarComponent],
  imports: [CommonModule, ClientesRoutingModule, FormsModule],
})
export class ClientesModule {}
