import { UsuarioDto } from '../model/usuario.dto';

export interface InterfaceExeption {
  StringExceptin(erro: string): string;
  ProdutosExeption(produtos: UsuarioDto[]): string;
}

