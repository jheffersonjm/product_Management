import { InterfaceExeption } from '../interfece/InterfaceExeption';
import { UsuarioDto } from '../model/usuario.dto';

export class UserException implements InterfaceExeption {
  ProdutosExeption(produtos: UsuarioDto[]): string {
    throw new Error('Method not implemented.');
  }
  StringExceptin(erro: string): string {
    return erro.toString();
  }
}
