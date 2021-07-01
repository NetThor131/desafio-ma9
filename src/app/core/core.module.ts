import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfPipe, PhonePipe } from './pipes';

@NgModule({
  declarations: [CpfPipe, PhonePipe],
  imports: [CommonModule],
  exports: [CpfPipe, PhonePipe],
})
export class CoreModule {}
