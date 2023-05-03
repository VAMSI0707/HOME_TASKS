import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../components/user/user.component';
import { ActiveRoutingModule } from './active-routing.module';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { ActiveComponent } from './active.component';

@NgModule({
  declarations: [UserComponent,UserslistComponent,ActiveComponent],
  imports: [CommonModule,ActiveRoutingModule],
  exports:[UserslistComponent]
})
export class ActiveModule {}
