import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'profiles/:id', component: DetailsComponent},
  {path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ProfilesRoutingModule {
  static components  = [ ProfilesComponent ];
}
