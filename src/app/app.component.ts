import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{ title }}</h1>
    <img src="{{ imagePath }}"/>
  </div>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <app-messages></app-messages>
  <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My fam ';
  dada = 'Pishuwa L';
  imagePath = './../assets/img/folks.jpg';

  ngOnInit(): void {

  }
}
