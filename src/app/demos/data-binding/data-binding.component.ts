import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {
  public contadorCliques: number = 0;
  public urlImage: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";
  public nomeModule: string = "";
  public exemplo: string = "{{variavel}}";

  adicionarClique() {
    this.contadorCliques++;
  }
  zerarContador() {
    this.contadorCliques = 0;
  }
  keyUp(event: any) {
    this.nome = event.target.value;
  }
}
