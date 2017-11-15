import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/Hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  // selectedHero: Hero;
  familyHeroes: Hero[];

  // for AppComponent to acquire a runtime concrete HeroService instance
  constructor(private heroService: HeroService) {
    // Dependency Injection pfeee lol

    /*The constructor itself does nothing. The parameter simultaneously defines a private
    heroService property and identifies it as a HeroService injection site.
    Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.*/
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  ngOnInit(): void {
    /**
     * we may call getHeroes() method in a constructor, but a constructor should not contain complex
     * logic, especially a constructor that calls a server, such as a data access method.
     * The constructor is for simple initializations , like wiring constructor parameters to properties.
     * To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook.
     */
    // synchronous call:
    this.setHeroes();

    // async call using Promises
    // this.asyncSetHeroes();

    // async call using Promises with delay simulation
    // this.latencyAsyncGetHeroes();
  }

  setHeroes(): void {
    // this is a synchronous call to the HeroService method
    // this.familyHeroes = this.heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(heroes => this.familyHeroes = heroes);
  }

  asyncSetHeroes(): void {
    // this is a asynchronous call to the HeroService method
    // we can use Promises, which is an asynchronous technique that changes the signature of the getHeroes()
    // method in the HeroService.
    // Pass the callback function as an argument to the Promise's then() method for when the Promise in the service resolves

    // this.heroService.asyncGetHeroes().then(heroes => this.familyHeroes = heroes);
  }

  latencyAsyncGetHeroes(): void {
    // delay simulated operation in async state
    // this.heroService.httpGetHeroes().then(heroes => this.familyHeroes = heroes);
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }


}
