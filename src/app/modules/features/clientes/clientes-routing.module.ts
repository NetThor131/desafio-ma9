import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarComponent } from './pages/adicionar';

const routes: Routes = [{ path: 'adicionar', component: AdicionarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
