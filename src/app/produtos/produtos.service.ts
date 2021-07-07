import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

  protected UrlServiceV1: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    const url = `${this.UrlServiceV1}/produtos`;
    return this.http
      .get<Produto[]>(url);
  }

  obterProduto(id: string): Observable<Produto> {
    const url = `${this.UrlServiceV1}/produtos/${id}`;
    return this.http
      .get<Produto>(url);
  }
}