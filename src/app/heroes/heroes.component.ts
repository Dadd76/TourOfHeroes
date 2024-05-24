import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { NgFor,NgIf,UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe,FormsModule,RouterLink, HeroDetailComponent]
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  // onSelect(hero: Hero): void
  // {
  //   this.messageService.add('HeroesComponent : click on ' +  hero.name)
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //   this.selectedHero = hero;
  // }

}
