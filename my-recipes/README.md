# my-recipes :page_facing_up:

### Fina Matteo - 5B INF - I.I.S. Vallauri, Fossano (CN)

# About the course

This is going to be an app for the shopping list compiling.<br>
It will inlcude a collection of recipes in which the user have the possibility to watch and edit details.



## Lesson 3
### Recipes, recipe-list and its items

* **html** and **typescript** files update:
```
┐
├── recipe-detail.component.html
├── recipe-list.component.html and recipe-list.component.ts
│   └── recipe-item.component.html and recipe-item.component.ts
└── recipes.component.html
```

* **recipe.model.ts** file creation

* Usage of `*ngFor` for items component creation
* Usage of data-binding for the recipe info with the `@Input` decorator
* Each Recipe has a ***name*** a ***description*** and an ***imagePath***



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

* Project's folders structure:
```
my-recipes/
├── header/
├── recipes/
│   ├── recipe-detail
│   └── recipe-list/
│       └── recipe-item
└── shopping-list/
    └── shopping-edit
```