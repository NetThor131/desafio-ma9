import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'F':
        return 'Feminino';
      case 'M':
        return 'Masculino';
      case 'NE':
        return 'Não Especificado';
      default:
        break;
    }
  }
}
