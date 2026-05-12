import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TelefonePipe } from '../../pipes/telefone/telefone-pipe';
import { UsuarioDto } from '../../model/usuario.dto';
import { Router } from '@angular/router';
import { TelaInicialService } from '../../service/tela-inicial/tela-inicial.service';
@Component({
  selector: 'app-user-registration',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInput,
    TelefonePipe,
    FormsModule,
  ],
  templateUrl: './user-registration.html',
  styleUrls: ['./user-registration.css'],
})
export class UserRegistration {
  constructor(
    private router: Router,
    private service: TelaInicialService,
  ) {
  }

  telefone: string = '';
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  limparTelefone(valor: string): string {
    return valor.replace(/\D/g, '').substring(0, 11);
  }

  criarUsuario(){
    if (!this.nome && !this.telefone && !this.email && !this.senha && !this.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
   if (this.nome && this.telefone && this.email && this.senha && this.confirmarSenha) {
     if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }
    const novoUsuario = this.service.cadastrarUsuario({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      telefone: this.telefone,
    });
    alert(`Usuário ${this.nome} criado com sucesso!`);
     this.router.navigate(['login']);
    return novoUsuario;
   
  }
  return;
  }
}
