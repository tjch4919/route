import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ManageHeroesComponent} from './manage-heroes.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {AdminDashboardComponent} from './admin-dashoboard.component';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ]
})
export class AdminModule { }
