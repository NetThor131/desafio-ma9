import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarComponent } from './pages/adicionar';
import { VisualizarComponent } from './pages/visualizar';

const routes: Routes = [
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'visualizar/:id', component: VisualizarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
