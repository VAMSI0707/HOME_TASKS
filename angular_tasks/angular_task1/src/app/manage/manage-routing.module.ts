import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { UserdetailComponent } from '../components/userdetail/userdetail.component';
import { ManageComponent } from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: ':id',
        component: UserdetailComponent,
      },
    ],
  },
  // {
  //   path: ':id',
  //   component: UserdetailComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
