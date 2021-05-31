import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { Heroes } from './heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }

  getHero(id: Number): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero with id: ${id}`);
    return of(hero);
  }

}