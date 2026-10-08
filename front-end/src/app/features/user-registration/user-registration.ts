import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TelaInicialService } from '../../service/tela-inicial/tela-inicial.service';

@Component({
  selector: 'app-user-registration',
  imports: [
    FormsModule,
    MatButton,
    MatIconButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
  ],
  templateUrl: './user-registration.html',
  styleUrls: ['./user-registration.css'],
})
export class UserRegistration {
  telefone = '';
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private router: Router,
    private service: TelaInicialService,
  ) {}

  toggleSenhaVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  limparTelefone(valor: string): string {
    const digits = (valor ?? '').replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) {
      return digits;
    }

    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  criarUsuario() {
    if (!this.nome.trim() || !this.telefone.trim() || !this.email.trim() || !this.senha.trim() || !this.confirmarSenha.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
    if (!emailValido) {
      alert('Informe um email válido.');
      return;
    }

    if (this.senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    const novoUsuario = this.service.cadastrarUsuario({
      nome: this.nome.trim(),
      email: this.email.trim(),
      senha: this.senha,
      telefone: this.telefone.trim(),
    });

    alert(`Usuário ${this.nome.trim()} criado com sucesso!`);
    this.router.navigate(['login']);
    return novoUsuario;
  }

  voltarParaLogin() {
    this.router.navigate(['login']);
  }
}
