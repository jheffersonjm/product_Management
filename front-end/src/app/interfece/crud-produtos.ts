import { UsuarioDto } from '../model/usuario.dto';
import { ProductException } from '../exceptions/product-exception';
import { ProdutosDto } from '../model/produtos.dto';

export interface CrudProdutos {
  criarProdutos(
    nome: string,
    descricao: string,
    quantidade: number,
    url: string,
    preco: number,
  ): void;
  AtualizarProdutos(
    id: number,
    nome: string,
    descricao: string,
    quantidade: number,
    url: string,
    preco: number,
  ): void;
  Selecionar(): ProdutosDto[];
  SeleccionarProdutosPorId(id: number): ProdutosDto | undefined;
  Deletar(id: number): void;
}
