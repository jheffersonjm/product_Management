export class UsuarioDto {
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
  numero?: string;
  constructor(
    nome?: string,
    email?: string,
    senha?: string,
    numero?: string
  ) {
    this.id = this.gerarId();
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.numero = numero;
  }
  private gerarId() {
    return Math.floor(Math.random() * 1000000);
  }
}
