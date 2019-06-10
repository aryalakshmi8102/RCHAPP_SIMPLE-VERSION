import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MotherRchComponent } from './mother-rch/mother-rch.component';
import { ChildRCHComponent } from './child-rch/child-rch.component';
import { DeleteChildComponent } from './delete-child/delete-child.component';
import { DeleteMotherComponent } from './delete-mother/delete-mother.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'child-rch', component: ChildRCHComponent },
  { path: 'mother-rch', component: MotherRchComponent },
  { path: 'delete-child', component: DeleteChildComponent },
  { path: 'delete-mother', component: DeleteMotherComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
