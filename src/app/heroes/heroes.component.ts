import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { NgFor,NgIf,UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe,FormsModule, HeroDetailComponent]
})

export class HeroesComponent {

  heroes: Hero[] = [];
  //heroes = HEROES;
  selectedHero?: Hero;


  constructor(private heroService :  HeroService, private messageService: MessageService)
  {


  }

  ngOnInit(): void
  {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void
  {
    this.messageService.add('HeroesComponent : click on ' +  hero.name)
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

}
