import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { UserdetailComponent } from '../components/userdetail/userdetail.component';
import { ManageComponent } from './manage.component';
import { UserCreateComponent } from '../components/userCreate/userCreate.component';
import { UserUpdateComponent } from '../components/userUpdate/userUpdate.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'create',
        component: UserCreateComponent,
      },
      {
        path: 'edit',
        component: UserUpdateComponent,
      },
      {
        path: ':id',
        component: UserdetailComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
