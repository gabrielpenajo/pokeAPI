import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { environment } from './../../environments/environment';
import { NavigationError, Router } from '@angular/router';

const API = environment.API;

@Injectable({
  providedIn: 'any'
})
export class DataService {
  pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  // Get pokemon from API
  fetchPokemonFirstGen() {
    const firstGenUrl: string = `${API}pokemon?limit=151`;

    this.httpClient.get(firstGenUrl).pipe(
      map((value: any) => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url))
        )
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => {
      const pokemon = Pokemon.parse(result);
      this.pokemons[result.id] = pokemon;
    });
  }

  // Get more pokemon data
  fetchPokemonData(param: string) {
    return this.httpClient.get(`${API}pokemon/${param}/`);
  }
}
