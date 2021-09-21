import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [ DataService ]
})
export class PokemonListComponent implements OnInit {
  constructor(
    public dataService: DataService
  ) {
    dataService.fetchPokemonFirstGen();
  }

  ngOnInit(): void { }
}
