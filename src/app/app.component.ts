import { Component, OnInit } from '@angular/core'

import { HeroService } from './services/hero.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})

export class AppComponent {
    title = 'Tour of Heroes';
}