import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarModule } from './search-bar/search-bar.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
