import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../components/user/user.component';
import { ActiveRoutingModule } from './active-routing.module';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { ActiveComponent } from './active.component';
import { UserFullNamePipe } from '../shared/pipes/first-last-name.pipe';
import { ShareModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserslistComponent, ActiveComponent],
  imports: [CommonModule, ActiveRoutingModule, ShareModule],
  exports: [UserslistComponent],
  providers: [ActiveComponent],
})
export class ActiveModule {}
