import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageServive: MessageService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageServive.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
