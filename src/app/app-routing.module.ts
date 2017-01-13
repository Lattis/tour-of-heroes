import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HeroesComponent } from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
    // redirect from '/' do '/dashboard' at the begining
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: DetailsComponent },
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }