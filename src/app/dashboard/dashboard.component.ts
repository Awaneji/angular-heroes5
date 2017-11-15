import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private hereService: HeroService) { }

  ngOnInit() {
    this.getFourHeroesWithDelay();
  }

  private getFourHeroesWithDelay(): void {
    this.hereService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
    // this.hereService.latencyAsyncGetHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
  }

}
