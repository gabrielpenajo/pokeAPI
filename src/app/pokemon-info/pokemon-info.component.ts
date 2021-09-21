import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

import { DataService } from './../services/data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
  providers: [ DataService ]
})
export class PokemonInfoComponent implements OnInit {
  public pokemon: any;
  public param: string = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.param = this.route.snapshot.queryParams.param;

        this.dataService.fetchPokemonData(this.param)
        .subscribe(data => {
          this.pokemon = data;

          console.log(data);
        });
      }
    });
  }

  ngOnInit(): void { }
}
