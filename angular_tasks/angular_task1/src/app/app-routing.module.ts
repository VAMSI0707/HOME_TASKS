import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active',
    component: ActiveComponent,
  },
  {
    path: 'deleted',
    component: DeletedComponent,
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
  },
];
// loadChildren:()=> ActiveModule loadChildren:()=>DeletedModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
