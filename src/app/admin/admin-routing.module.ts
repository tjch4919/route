import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {AdminDashboardComponent} from './admin-dashoboard.component';
import {NgModule} from '@angular/core';
import {AuthGaurd} from '../auth-gaurd.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: '',
        canActivateChild: [AuthGaurd],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
