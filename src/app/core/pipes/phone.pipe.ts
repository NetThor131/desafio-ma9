import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  private readonly regularExpressionsAndMasks = {
    8: {
      regularExpression: /(\d{4})(\d{4})/,
      mask: '$1-$2',
    },
    10: {
      regularExpression: /(\d{2})(\d{4})(\d{4})/,
      mask: '($1) $2-$3',
    },
    11: {
      regularExpression: /(\d{2})(\d{5})(\d{4})/,
      mask: '($1) $2-$3',
    },
  };

  transform(value: string): string {
    const regularExpressionAndMask =
      this.regularExpressionsAndMasks[value.length];
    const phoneNumberWithMask = value.replace(
      regularExpressionAndMask.regularExpression,
      regularExpressionAndMask.mask
    );
    return phoneNumberWithMask;
  }
}
