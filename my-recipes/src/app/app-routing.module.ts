import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

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
        component: RecipesComponent
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