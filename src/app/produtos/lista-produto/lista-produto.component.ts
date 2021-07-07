import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  public listaProdutos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.listaProdutos = produtos;
          console.table(produtos);
        },
        error => {
          console.log(error);
        }
      )
  }

}
