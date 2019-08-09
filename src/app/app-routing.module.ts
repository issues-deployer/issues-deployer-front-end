import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperGroupsComponent } from './super-groups/super-groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/super-groups',
    pathMatch: 'full'
  },
  {
    path: 'super-groups',
    component: SuperGroupsComponent
  },
  {
    path: 'super-groups/:superGroupId',
    component: GroupDetailComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
