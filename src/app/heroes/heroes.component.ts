import { Component, OnInit } from '@angular/core'
import {Router } from '@angular/router'

import { Hero } from 'app/hero'
import { HeroService } from 'app/services/hero.service'

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router:Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
  }

  goToDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
