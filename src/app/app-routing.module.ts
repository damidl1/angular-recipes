import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeNotFoundComponent } from './components/recipe-not-found/recipe-not-found.component';

const routes: Routes = [
  {path: 'list', component: RecipesListComponent},
  {path: 'new', loadComponent: () => import('./components/recipe-add/recipe-add.component').then(cmp => cmp.RecipeAddComponent)},  // per fare il lazy loading di un componente
  {path: 'recipe/:id', loadComponent: () => import('./components/recipe-detail/recipe-detail.component').then(cmp => cmp.RecipeDetailComponent)},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', component: RecipeNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
