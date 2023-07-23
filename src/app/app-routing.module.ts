import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";
import {PersonDetailsComponent} from "./person-details/person-details.component";

const routes: Routes = [
  { path: '', component: PersonDetailsComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
