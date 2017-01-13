import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';
import { HeroService } from './services/hero.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],

  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})

export class AppModule {

}