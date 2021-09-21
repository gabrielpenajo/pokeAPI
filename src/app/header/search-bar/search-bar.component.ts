import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const info = environment.pokeInfo;
const param = environment.param;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  input: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  onClick() {
    this.search();
  }

  onKeyDown(event: any) {
    this.input = event.target.value;
  }

  onKeyUp(event: any) {
    this.input = event.target.value;
  }

  search() {
    if (this.input == '') {
      return;
    }
    else {
      this.router.navigateByUrl(`${info}${param}${this.input}`);
    }
  }
}
