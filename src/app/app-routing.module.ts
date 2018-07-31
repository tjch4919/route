import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {CanDeactiveGuardService} from './can-deactive-guard.service';
import {AuthGaurd} from './auth-gaurd.service';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

const appRoute: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGaurd]
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute,
      {
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategy
      }
    ),
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactiveGuardService,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
