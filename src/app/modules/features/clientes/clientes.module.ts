import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AdicionarComponent } from './pages/adicionar';
import { VisualizarComponent } from './pages/visualizar';
import { EditarComponent } from './pages/editar';
import { FormClienteComponent } from './components/form-cliente';

@NgModule({
  declarations: [
    AdicionarComponent,
    VisualizarComponent,
    FormClienteComponent,
    EditarComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule, FormsModule, ToastrModule],
})
export class ClientesModule {}
