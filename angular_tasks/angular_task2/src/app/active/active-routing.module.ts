import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { ActiveComponent } from './active.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ActiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveRoutingModule {}
