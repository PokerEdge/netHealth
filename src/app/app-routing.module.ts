import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighfiveComponent } from '../app/components/highfive/highfive.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { NotfoundComponent } from '../app/components/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'highfive', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'highfive', component: HighfiveComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
