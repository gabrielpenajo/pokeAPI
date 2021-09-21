import { NgModule, OnInit } from "@angular/core"
import { Router, RouterEvent, Routes } from "@angular/router"
import { RouterModule } from "@angular/router";

import { PokemonInfoComponent } from "./pokemon-info/pokemon-info.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const APP_ROUTES: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon', component: PokemonInfoComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

}
