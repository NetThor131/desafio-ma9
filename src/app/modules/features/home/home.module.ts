import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesService } from '@data/services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home';
import { TabelaComponent } from './components/tabela';

@NgModule({
  declarations: [HomeComponent, TabelaComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [ClientesService],
})
export class HomeModule {}
