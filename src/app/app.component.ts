import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeAPI';

  valor_atual: string = "";
  valor_salvo: string = "";
  isMouseOver: boolean = false;
  isClickActive: boolean = false;

  onClick() {
    this.isClickActive = !this.isClickActive;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valor_atual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valor_salvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
