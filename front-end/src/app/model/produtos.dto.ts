export class ProdutosDto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  url: string;

  constructor(nome: string, descricao: string, quantidade: number, url: string, preco: number) {
    this.id = this.gerarId() - 2;
    this.nome = nome;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.preco = preco;
    this.url = url;
  }

  private gerarId() {
    return Math.floor(Math.random() * 1000000);
  }
}
