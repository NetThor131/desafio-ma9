import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfPipe, PhonePipe, SexoPipe } from './pipes';

@NgModule({
  declarations: [CpfPipe, PhonePipe, SexoPipe],
  imports: [CommonModule],
  exports: [CpfPipe, PhonePipe, SexoPipe],
})
export class CoreModule {}
