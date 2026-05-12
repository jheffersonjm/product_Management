import { InterfaceExeption } from '../interfece/InterfaceExeption';
import { UsuarioDto } from '../model/usuario.dto';

export class ProductException implements InterfaceExeption {
  ProdutosExeption(produtos: UsuarioDto[]): string {
    return produtos.toLocaleString();
  }

  StringExceptin(erro: string): string {
    return '';
  }

}
