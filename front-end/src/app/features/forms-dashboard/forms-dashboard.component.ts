import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import { MatIcon, MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { CrudProdutos } from '../../interfece/crud-produtos';
import { UsuarioDto } from '../../model/usuario.dto';
import { FormsDashboardService } from '../../service/forms-dashboard/forms-dashboard-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forms-dashboard',
  imports: [MatCardModule, MatInputModule, MatInputModule, MatIcon, FormsModule],
  templateUrl: './forms-dashboard.component.html',
  styleUrl: './forms-dashboard.component.css',
})
export class FormsDashboardComponent {
  @Input() id? : number;
  @Input() nome: string = ''
  @Input() descricao: string = ''
  @Input() preco: number = 0
  @Input() quantidade =  0
  @Input() url: string = ''
  @Input()atualiza: boolean = false;
  @Output() salvar= new EventEmitter()
  constructor(
    private ServiceDasckbord: FormsDashboardService,
    private router: Router,
  ) {}

  public criarProdutos(): void {
    if ((this.nome == "" || this.descricao == "" || this.quantidade <= 0 || this.url == "" || this.preco <= 0)) {
      alert('Preencha todos os campos');
    } else {
      this.ServiceDasckbord.criarProdutos(
        this.nome,
        this.descricao,
        this.quantidade,
        this.url,
        this.preco,
      );
      alert('Criar produtos');
      this.router.navigate(['/dashboard']);
    }
  }

public Atualizar(): void {
    if (this.nome && this.descricao && this.quantidade > 0 && this.url && this.preco > 0) {

      this.ServiceDasckbord.AtualizarProdutos(
        this.id,
        this.nome,
        this.descricao,
        this.quantidade,
        this.url,
        this.preco,
      )

      alert('Produto atualizado')
      this.salvar.emit(false)
      console.log();
    }
  if (this.id !== undefined) {
   alert("Produto não encontrado")



    return;
  }

}


}
