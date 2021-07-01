import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string): string {
    const regularExpression = new RegExp(/(\d{3})(\d{3})(\d{3})(\d{2})/);
    const mask = '$1.$2.$3-$4';
    const cpfWithMask = cpf.replace(regularExpression, mask);
    return cpfWithMask;
  }
}
