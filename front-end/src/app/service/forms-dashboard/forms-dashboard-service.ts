import { Injectable} from '@angular/core';
import { CrudProdutos } from '../../interfece/crud-produtos';
import {UserException} from '../../exceptions/user-exception';
import {ProductException} from '../../exceptions/product-exception';
import {ProdutosDto} from '../../model/produtos.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormsDashboardService implements CrudProdutos {
  produtos: ProdutosDto[] = [];
  constructor(private router: Router) {
  }
  atualizado: boolean = false;
  Selecionar(): ProdutosDto[] {
    const produtos = this.produtos;
    return produtos;
  }
  SeleccionarProdutosPorId(id: number): ProdutosDto | undefined {
    const produtos = this.produtos.find(produto => produto.id === id);
    return produtos;
  }

  criarProdutos(
    nome: string,
    descricao: string,
    quantidade: number,
    url: string,
    preco: number,
  ): void {
    const produtos = new ProdutosDto(nome, descricao, quantidade, url, preco);
    this.produtos.push(produtos);
  }

  AtualizarProdutos(
    id: number | undefined,
    nome: string,
    descricao: string,
    quantidade: number,
    url: string,
    preco: number,
  ): void{
    this.criarProdutos(nome, descricao, quantidade, url, preco);
    this.Deletar(id)

  }

  Deletar(id: number | undefined): void {
this.produtos = this.produtos.filter(produto => produto.id != id);
  }

  ProcurarNome(nome: string): ProdutosDto[]{
    this.produtos = this.produtos.filter(produto => produto.nome === nome);
    return this.produtos;
    }


}
