import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.hero);
  }

}
