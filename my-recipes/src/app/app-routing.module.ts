import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { 
        // SE NON VIENE SPECIFICATO, C'E' IL REDIRECT ALLA CORRETTA RISORA DI "HOME"
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        // PATH
        path: 'recipes',
        // COMPONENTE ASSOCIATO CHE TIRA SU
        component: RecipesComponent,
        children: [
            { path: '', component: RecipesStartComponent },
            // N.B. PRIMA DI :id E :id/edit, ALTRIMENTI ERRORE
            { path: 'new', component: RecipeEditComponent },
            // SUB-ROUTING IN BASE ALLA SINGOLA Recipe
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}