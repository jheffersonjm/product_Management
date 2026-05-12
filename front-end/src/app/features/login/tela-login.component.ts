import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TelaInicialService } from '../../service/tela-inicial/tela-inicial.service';
import { UsuarioDto } from '../../model/usuario.dto';

@Component({
  selector: 'app-tela-login',
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSnackBarModule,
  ],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css',
})
export class TelaLoginComponent {
  aparecerlogin: boolean = false;
  gmail: string = '';
  senha: string = '';
  nome: string = '';
  usuario = UsuarioDto;
  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private service: TelaInicialService,
  ) {}

  logar() {
    if (!this.gmail.trim() || !this.senha.trim()) {
      this.MostrarAlerta('por favor prencha todos os campos');
      return;
    }
    const procura = this.service.procurar(this.gmail, this.senha);
    if (procura) {
      console.log(procura);
      this.navegarPlaninha();

    }
  }

  navegarPlaninha() {
    this.router.navigate(['dashboard']);
  }

  MostrarAlerta(mensagem: string) {
    this.snackbar.open(mensagem, 'fechar', {
      duration: 3000,
    });
  }

  cadastra() {
    this.router.navigate(['CadastroUsuario']);
  }


}
