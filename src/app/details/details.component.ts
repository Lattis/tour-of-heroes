import { Component, Input } from '@angular/core';
import { Hero } from 'app/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent  {
  @Input()
  hero: Hero;
}
