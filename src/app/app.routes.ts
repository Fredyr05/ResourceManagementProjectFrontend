import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'project', component: ProjectComponent}
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
