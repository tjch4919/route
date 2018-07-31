import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisListComponent} from './crisis-list.component';
import {CanDeactiveGuardService} from '../can-deactive-guard.service';
import {CrisisDetailResolver} from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactiveGuardService],
            resolve: {crisis: CrisisDetailResolver}
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
  providers: [CrisisDetailResolver]
})
export class CrisisCenterRoutingModule { }
