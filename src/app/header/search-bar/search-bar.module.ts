import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar.component';
import { SearchButtonModule } from './search-button/search-button.module';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchButtonModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
