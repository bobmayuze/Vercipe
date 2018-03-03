import {Component} from '@angular/core';
import {LoggerService} from '../logger.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService
  ]
})

export class SearchBarComponent {

  constructor() { }

  // constructor(private heroService: HeroService,
  //             private router: Router) {
  //   this.heroFormControl = new FormControl();

  //   this.heroService.getAllHeroes().subscribe((heroes: Array<Hero>) => {
  //     this.defaultHeroes = heroes.filter(hero => hero['default']);

  //     this.heroFormControl.valueChanges
  //       .startWith(null)
  //       .map(value => this.filterHeroes(value))
  //       .subscribe(heroesFiltered => {
  //         this.filteredHeroes = heroesFiltered;
  //       });
  //   });
  // }

  // filterHeroes(val: string): Hero[] {
  //   return val ? this.defaultHeroes.filter(hero => hero.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && hero['default'])
  //     : this.defaultHeroes;
  // }

  // searchHero(hero: Hero): Promise<boolean> {
  //   LoggerService.log('Moved to hero with id: ' + hero.id);
  //   return this.router.navigate([AppConfig.routes.heroes + '/' + hero.id]);
  // }
}
