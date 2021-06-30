import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesService } from '@data/services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home';
import { TabelaComponent } from './components/tabela';
import { HeaderHomeComponent } from './components/header-home/header-home.component';

@NgModule({
  declarations: [HomeComponent, TabelaComponent, HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [ClientesService],
})
export class HomeModule {}
