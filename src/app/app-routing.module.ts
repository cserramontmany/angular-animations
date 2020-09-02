import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AAnimComponent } from './a-anim/a-anim.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'a-anim', component: AAnimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
