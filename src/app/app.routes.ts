import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import { ProjectComponent } from './project/project.component';
import { from } from 'rxjs';
import { FormulaComponent } from './formula/formula.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'project', component: ProjectComponent},
  { path: 'login', component: LoginComponent},
  {path: 'formula',component: FormulaComponent}
  /*children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },]
  },
  { path: 'shopping-list', component: ShoppingListComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
