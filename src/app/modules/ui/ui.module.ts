import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar';
import { FooterComponent } from './components/footer';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class UiModule {}
