import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDto } from '../../model/usuario.dto';
import { MatButton } from '@angular/material/button';
import { FormsDashboardService } from '../../service/forms-dashboard/forms-dashboard-service';
import { TelaInicialService } from '../../service/tela-inicial/tela-inicial.service';
import { TelaLoginComponent } from '../login/tela-login.component';
import { at } from '@angular/cli/src/commands/mcp/constants';
import { FormsDashboardComponent } from '../forms-dashboard/forms-dashboard.component';
import { ProdutosDto } from '../../model/produtos.dto';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButton,
    FormsDashboardComponent,
  ],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashboardComponent {
  constructor(
    private ProdutoService: FormsDashboardService,
    private router: Router,
    private serviceTelaInicial: TelaInicialService,
  ) {}
  produtos: ProdutosDto[] = [];
  id?: number
  nome: string = '';
  descricao: string = '';
  quantidade: number = 0;
  preco: number = 0;
  url: string = '';
  nameRead: string = '';
  atualizado: boolean = false;
  registrarProdutos(): void {
    this.router.navigate(['forms-dashboard']);
  }
  ngOnInit() {
    this.pegardados();
    console.log(this.pegardados());
  }

  pegardados(): ProdutosDto[] {
    this.produtos = this.ProdutoService.Selecionar();
    return this.produtos;
  }

  Deletar(id: number | undefined): void {
    if (id == undefined) {
      return;
    }
    console.log(id);
    this.ProdutoService.Deletar(id);
    this.pegardados();
  }

  Atualizar(id: number, nome: string, descricao: string, quantidade: number, preco: number, url: string): void {
    this.id = id
    this.nome = nome;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.preco = preco;
    this.url = url;
    this.atualizado = true;
  }

  recebervalor(valor: boolean){
    this.atualizado= valor
    this.pegardados()
  }


}


