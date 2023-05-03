import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { ActiveModule } from '../active/active.module';
import { DeletedRoutingModule } from './deleted-routing.component';


@NgModule({
  declarations: [DeletedComponent],
  imports: [
    CommonModule,ActiveModule,DeletedRoutingModule
  ]
})
export class DeletedModule { }
