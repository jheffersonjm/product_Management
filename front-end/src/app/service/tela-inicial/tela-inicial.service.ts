import { Injectable} from '@angular/core';
import { UsuarioDto } from '../../model/usuario.dto';
import { UserException } from '../../exceptions/user-exception';

@Injectable({
  providedIn: 'root',
})
export class TelaInicialService {
  usuario: UsuarioDto[] = [];
  error: UserException = new UserException();
constructor() {}

  public procurar(email: string, senha: string): UsuarioDto | null {
    const emailNormalizado = email.trim().toLowerCase();
    const senhaNormalizada = senha.trim();
    const usuario = this.usuario.find(
      (item) =>
        item.email?.trim().toLowerCase() === emailNormalizado &&
        item.senha?.trim() === senhaNormalizada,
    );
    if (!usuario) {
      alert('Usuario não encontrado');
      return null;
    }


    return usuario;
  }

  public cadastrarUsuario(data: { nome: string; email: string; senha: string; telefone: string }) {
    const usuario = new UsuarioDto(data.nome, data.email, data.senha, data.telefone);
    this.usuario.push(usuario);
    return usuario;
  }




}
