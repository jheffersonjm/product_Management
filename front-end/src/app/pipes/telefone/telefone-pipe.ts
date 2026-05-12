import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (!value) {
      return '';
    }

    let telefone = String(value).replace(/\D/g, '');

    if (telefone.length > 11) {
      telefone = telefone.substring(0, 11);
    }

    if (telefone.length <= 10) {
      return telefone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    return telefone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
}
