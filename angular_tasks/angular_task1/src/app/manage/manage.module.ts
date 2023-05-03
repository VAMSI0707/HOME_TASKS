import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from '../components/userdetail/userdetail.component';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ActiveModule } from '../active/active.module';
import { ManageComponent } from './manage.component';

@NgModule({
  declarations: [UserdetailComponent,ManageComponent],
  imports: [
    CommonModule,ManageRoutingModule,ActiveModule
  ]
})
export class ManageModule { }
