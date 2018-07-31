import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Hero, HeroService} from './hero.service';
import {slideInDownAnimation} from '../animation';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './hero-detail.component.html',
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
