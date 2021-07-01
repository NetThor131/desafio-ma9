import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { ClientesService } from '@data/services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home';
import { TabelaComponent } from './components/tabela';
import { HeaderHomeComponent } from './components/header-home';

@NgModule({
  declarations: [HomeComponent, TabelaComponent, HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule, ToastrModule],
  providers: [ClientesService],
})
export class HomeModule {}
