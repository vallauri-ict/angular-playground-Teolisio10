# my-recipes :page_facing_up::cookie:

### Fina Matteo - 5B INF - I.I.S. Vallauri, Fossano (CN)

# About the course

This is going to be an app for the shopping list compiling.<br>
It will inlcude a collection of recipes in which the user have the possibility to watch and edit details.



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
└── shopping-list/
    └── shopping-edit
```