import { MessageService } from './message.service';
import { HEROES } from './dal/hero-data-provider';
import { Injectable } from '@angular/core';
import { Hero } from './models/Hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  getHeroesNoHttp(): Observable<Hero[]> {
    this.messageService.add('HeroServices: download heroes');
    return of(HEROES);
  }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroServices: download heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
      );
  }

  getHeroNoHttp(id: number): Observable<Hero> {
    this.messageService.add(`Heroservice: get hero id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHero(id: number): Observable<Hero> {
    // this.messageService.add(`Heroservice: get hero id: ${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    return this.http.get<Hero>(this.heroesUrl + `/${id}`)
      .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id${id}`))
      );
  }

  private log(message: string) {
    this.messageService.add('HeroesService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
