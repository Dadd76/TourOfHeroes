import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  heroes: Hero[] = [];

  constructor(private heroService :  HeroService, private messageService: MessageService)
  {


  }

  ngOnInit(): void
  {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes = heroes.slice(1, 5));
  }
}
