import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero'
import { HeroService } from 'app/services/hero.service'

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1, 5))
  }

}
