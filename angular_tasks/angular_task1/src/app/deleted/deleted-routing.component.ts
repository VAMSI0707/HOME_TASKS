import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { DeletedComponent } from './deleted.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: DeletedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedRoutingModule {}
// export const activeRouting = RouterModule.forRoot(routes);
