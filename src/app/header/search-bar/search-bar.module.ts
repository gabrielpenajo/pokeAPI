import { AppRoutingModule } from './../../app.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SearchBarComponent,
    RouterModule
  ]
})
export class SearchBarModule { }
