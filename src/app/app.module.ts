import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  // redirect from '/' do '/dashboard' at the begining
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})

export class AppModule {

}