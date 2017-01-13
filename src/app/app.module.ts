import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component'
import { HeroesComponent }  from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
    
}