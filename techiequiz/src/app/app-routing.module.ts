import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomequizComponent } from './components/homequiz/homequiz.component';
import { AdminSubjectComponent } from './admin/admin-subject/admin-subject.component';
import { AdminDashboadNavComponent } from './admin/admin-dashboad-nav/admin-dashboad-nav.component';
import { AdminTopicComponent } from './admin/admin-topic/admin-topic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomequizComponent
  },
  {
    path: 'admin',
    component: AdminDashboadNavComponent,
    children: [
      { path: '', component: AdminSubjectComponent },
      { path: 'subject', component: AdminSubjectComponent},
      { path: 'topic', component: AdminTopicComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
