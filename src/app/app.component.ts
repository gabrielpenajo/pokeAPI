import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeAPI';
  currentRoute: string = "";

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Route changed!');
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
