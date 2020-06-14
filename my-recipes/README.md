# my-recipes :page_facing_up::cookie:

### Fina Matteo - 5B INF - I.I.S. Vallauri, Fossano (CN)

# About the course

This is going to be an app for the shopping list compiling.<br>
It will inlcude a collection of recipes in which the user have the possibility to watch and edit details.


## Lesson 16
### New Recipe
* **html** and **typescript** files update:
```
app-routing.module.ts
├── recipe-detail.component.ts, recipes-detail.component.html
├── recipe-edit.component.ts and recipe-edit.component.html
└── recipe-list.component.ts and recipe-list.component.html
```
* first of alla is necessary a new route for adding a recipe, so in the **app-routing.module.ts** file the route */recipes/new* is added; pay attention to insert it before the navigations route (*/:id* and */:id/edit*)
* **recipe-edit** folder created by CLI, and so all the files that it includes
    * the html will show a simple text for now, because a form should be implemented; so the html pages **recipe-list** and the **recipe-detail** now have a function associated for the route navigation when the creation of a new recipe is called




## Lesson 15
### Sub-routing
* **html** and **typescript** files update:
```
db.json
└── app-routing.module.ts
    └── recipe.service.ts, recipes.component.ts and recipes.component.html, recipe.model.ts
        ├── recipe-detail.component.ts and recipe-detail.component.html
        ├──── recipe-item.component.ts and recipe-item.component.html
        └── recipe-start.component.ts and recipe-start.component.html
```
* changes in order to permit the user to navigate with **sub-routing**, so in the url write */recipes/1*, where *1* is the **id** of the selected recipe, or just by clicking on the recipe the url change
* creation of components, by CLI, **recipes-start**, that is used at the loading of the site and display a text
    * also the `*ngIf` in the **recipes.component.html** is deleted, but is inserted the `<router-outlet>` tag, to permit **sub-routing**; also the **recipes.component.ts** is simplified because the *onInit* function is no more needed 
* changes in **db.json** and so in **recipe.model.ts** because by adding the **id** property in the json the sub-routing is done automatically by **json-server**; so is necessary to apply changes also for *Recipe* that must have the id property available
* the core of sub-routing is in the **app-routing.module.ts**, in fact in the routing related to */recipes*, is added the property *children*, that permit to have child route from the parent one; the routes added are the one that match at the load of the site that will load the **recipe-start** component, so */recipe/*, and the one that match when is inserted a number (the id) that will load the **recipe-detail** component, so */recipes/:id*
* then in the **recipe.service.ts** the function *getRecipe()* permit to have all useful data related to the single selected recipe
* in the **recipe-detail.component.ts** there is the switching for have the correct selected recipe; then the recipe is no more received as *@Input*, so when was used the *recipe* property now there is the *recipeService.selectedRecipe* property



## Lesson 14
### Routing
* **html** and **typescript** files update:
```
app.module.ts, app.component.ts, app-routing.component.ts
├── shopping-list.component.html
├──── header.component.html and header.component.ts
├────── recipe-detail.component.html
└──────── recipe-item.component.html
```
* creation of the **app-routing.module.ts** file to manage correctly the routes with the *appRoutes* property that has all the useful routes (*/recipes*, */shopping-list*, *the default that redirect to /recipes*); remember to update the **app.module.ts** file by adding *AppRoutingModule* to the imports  
* now is possible to call in the **app.component.html** just `<router-outlet>` instead of the tags to display the shopping-list or the recipes
* than in the **header.component.html** the `<li>` tag has assigned the *active* bootsrap class, and with *routerLink* is possible to assign the correct route to be displayed; so is no more necessary the *Event Binding* to switch the routes
* finally, in all the others **.html** files the changes are only the add of the *cursor*'s style property for `<a>` tags in order to show the cursor as pointer



## Lesson 13
### Relate the ingredients in the Recipes
* **html** and **typescript** files update:
```
┐
├── recipe.service.ts
│   └── recipe-detail.component.html and recipe-detail.component.ts
└── shopping-list.service.ts
```
* in this lesson when a **recipe** is selected, the **recipe-detail** will show also the ingredients needed to make it; the *ingredients* are also displayed in the **shopping-list** the *ingredients* by clicking *To Shopping List* in **recipe-detail**
* obviously the main management of all is done by the **.service.ts** files
* in order to save in an array multiple objects, is used the spreed operator `...`



## Lesson 12
### Services for recipes and shopping list
* **html** and **typescript** files update:
```
db.json
├── app.module.ts
├──── recipe.component.html and recipe.component.ts, recipe.model-ts, recipe.service.ts
│     └── recipe-list.component.ts and recipe-list.component.html
│         └── recipe-item.component.ts and recipe-item.component.html
└──── shopping-list.component.html and shopping-list.component.ts, shopping-list.service.ts
      └── shopping-edit.component.ts
```
* **shopping-list.component.ts** and **recipe.service.ts** file creation, to implement *services*
* in general the services had permitted a semplification of the code and the main managament is made in the files **recipe.service.ts** ans **shopping-list.service.ts**, so from the **component.ts** files is possible to call the function that returns data
* the relation between the **component.ts** files and the **service.ts** is permitted by *Injections*
* in the *shoppin-list* case there is also the management for the add of a new *Ingredient*, so now the database must be updated in order to also have the recipes informations related to ingredient informations



## Lesson 11
### Directive for dropdown

* **html** and **typescript** files update:
```
app.module.ts
├── dropdown.directive.ts
├── recipe-detail.component.html
└── header.component.html
```
* **dropdown.directive.ts** file creation manually in the `shared` root
    * the module must be added in the **app.module.ts** file 
* this exercise should make the Bootstrap *dropdown-list* work, but not by using the Bootstrap javascript
    * the `@Directive` *appDropdown* is called in **recipe-detail.component.html** and in **header.component.ts** on the tag that implements the Bootstrap class *open*
    * in the **dropdown.directive.ts** file the **binding** over the *open* class is permitted by `@HostBinding`, so is now possible intercept when the class is triggered
        * at first a simple `@HostListener` was triggered on the *click* on the tag that trigger the class
        * then the `@HostListener` changed (*@HostListener('document:click', \['$event'\])*) and check also the event and who triggered the event so the problem of the dropdown that remain open overcome



## Lesson 10
### Hover and highlight items

* **html** and **typescript** files update:
```
app.module.ts
├── highlight.directive.ts
├── recipe-item.component.html
└── shopping-list.component.html
```
* CLI generation of the **highlight.directive.ts** component in the `shared` root, so it is also included in the modules
    * at first the change of the color was made by *ElementRef*, than with the *Renderer2* and finally by creating a **binding** with `@HostBinding`, that is the faster and cleaner way
    * obviusly is necessary call two `@HostListener`, one for the *enter* of the mouse and one for the *leave* 
* call of *appHighlight* in the **recipe-item.component.html** and **shopping-list.component.html**
    * at first called only *appHighlight* that is the anchor to access the DOM tag
    * then add of the possibility to access the *\[defaultColor\]* variable 
    * finally changed so appHighlight must be called like *\[appHighlight\]* because the variable has the same name of the `@Directive`, so by changing color it can be easily typed *\[appHighlight\]="'NewColor'"*



## Lesson 9
### Local Reference for the Shopping List

* **html** and **typescript** files update:
```
app.module.ts
└── shopping-list.component.html and shopping-list.component.ts
    └── shopping-edit.component.html and shopping-edit.component.ts
```
* by clicking over the add button a new item added in the form can be inserted in the shopping list
* add of *FormsModule* in the **app.module** for using data reffered to forms
* use of the `#` to set variables *#nameInput* and *#amountInput* in **shopping-edit** html to make them accessible from the .ts file
    * with `@ViewChild` is possible to access an html element that has the `#`
    * event *onAddItem* generated when the Add button in clicked and the new *Ingredient* is passed 
* in the **shopping-list** the event in intercepted and so the Ingredient, that is showed simply by adding it in the array of *ingredients*



## Lesson 8
### Property and Event Binding

* **html** and **typescript** files update:
```
recipes.component.html and recipes.component.ts
├── recipes-detail.component.html and recipes-detail.component.ts
└── recipes-list.component.html and recipes-list.component.ts
    └── recipe-item.component.html and recipe-item.component.ts
```
* use of property and event binding in order to make the *recipes section* work
    * the event is propagated from the **recipe-item** to the upper roots in order to reach the **recipe-detail**
* the useful data are stored in the *recipe* variable
* `@Input` is used to recive data and `@Output` is used to create the Event (with the *EventEmitter*) that will be sent
    * by writing the *@Output variable* in rouded brackets, like *(click)*, the event is recalled
* in **recipe-component** is used an `*ngIf` to check the *recipe* passed by the generated Event, so the **recipe-detail** section is showed with the data of the **recipe-item** selected



## Lesson 7
### Navigation in the header

* **html** and **typescript** files update:
```
app.component.ts and app.component.html
└── header.component.html and header.component.ts
```
* click over the button in the **header.component** controlled by the *onSelect* function which generate an Event 
* in the **app.component** the correct feature is loaded by clicking the right button
    * with a `*ngIf` the correct component (*<app-recipe>* or *<app-shopping-list>*)is loaded and showed



## Lesson 6
### Database data access

* **typescript** files update:
```
app.module.ts
├── data-storage.service.ts
└── recipes-list.component.html
```
* **db.json** data update
* **app.module.ts** *HttpClientModule* import
    * **data-storage.service.ts** *HttpClient* module import and code update in order to reach database data for */recipes*
        * **recipe-list.component.ts** static array commented because now data came from **db.json** and populate the array *recipes*



## Lesson 5
### Database and data-storage

* **data-storage** service created by Angular CLI in the `shared` folder
* **db.json** file creation: it contains the same data of the **recipe-list.component.ts** from the *Recipe* array
    * the database can be easily managed by installing the [JSON Server](www.npmjs.com/package/json-server) npm, that fake the API structure without coding



## Lesson 4
### Shared root, ingredients, shopping-list and its item

* **html** and **typescript** files update:
```
┐
├── ingredient.model.ts
└── shopping-list.component.html and shopping-list.component.ts
    └── shopping-edit.component.html
```
* `shared` folder creation, which includes files accessible from all the components
* **ingredients.model.ts** file creation in the new root
* Usage of `*ngFor` for *ingredients* creation
    * Each Ingredient has a *name* and an *amount*



## Lesson 3
### Recipes, recipe-list and its items

* **html** and **typescript** files update:
```
recipes.component.html
├── recipe-detail.component.html
└── recipe-list.component.html and recipe-list.component.ts
    └── recipe-item.component.html and recipe-item.component.ts
```
* **recipe.model.ts** file creation, a class for **Recipes**
* Usage of `*ngFor` for items component creation
* Usage of **data-binding** for the recipe info with the `@Input` decorator
* Each Recipe has a *name* a *description* and an *imagePath*



## Lesson 2
### Header and Recipes infrastructure

* **html** and **typescript** files update:
```
app.component.html
├── header.component.html and header.component.ts
├── recipes.component.html
│   └── recipe-list.component.html
└── recipes.component.html
```



## Lesson 1

* **header** component creation manually
* **recipes** component creation from Angular CLI
    * **recipe-detail** sub-component creation from Angular CLI
    * **recipe-list** sub-component creation from Angular CLI
        * **recipe-item** sub-component creation from Angular CLI




## Project's folders structure:
```
my-recipes/
├── header
├── recipes/
│   ├── recipe-detail
│   └── recipe-list/
│       └── recipe-item
├── shared
└── shopping-list/
    └── shopping-edit
```