import { Component, OnInit } from '@angular/core'

import { HeroService } from './services/hero.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:['app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
}