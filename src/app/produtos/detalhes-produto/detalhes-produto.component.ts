import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html'
})
export class DetalhesProdutoComponent implements OnInit {

  public produto: Produto = null;
  public id: string;
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.produtoService.obterProduto(this.id)
      .subscribe(
        p => {
          this.produto = p;
          console.log(p);
        },
        erro => {
          console.log(erro);
        }
      )
  }

}
