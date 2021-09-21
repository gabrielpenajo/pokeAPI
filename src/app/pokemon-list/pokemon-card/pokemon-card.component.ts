import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../models/pokemon';
import { environment } from 'src/environments/environment';

const info = environment.pokeInfo;
const param = environment.param;

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.pokemon) {
      this.router.navigateByUrl(`${info}${param}${this.pokemon.name}`);
    }
  }
}
