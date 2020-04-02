## Project: Help Me (Web and Mobile)

## Descriptive:  An application web and mobile, where you can  help someone, mainly after covid-19 pandemia. There is a list of cases containing details about the needs, you help with what you have to offer, may be care, food, money, or even some attention.

## Design:
**The wireframes**           : https://www.figma.com

**Visual identity (Colors)** : https://pigment.shapefactory.co

![wireframe of the application](https://github.com/fernandojvlima/helpMe/blob/master/wireframes.png)


### Tools and Resources used in the Backend:

- NodeJs (The javascript resource)
- Express (Mini framework)
- React-Router-Dom (To track Routes)
- Knex ( To manipulate the Database )
- Nodemon (To follow changes and update the application)
- Insomnia (To validate the requests HTTP)
- CORS (To insert a security layer)

Obs: IDE Visual Studio Code  

Step by Step (Building the application from start):

### Terminal (inside the project folder):


$ mkdir backend

$ npm init-y

$ cd backend

$ npm install express 


---
```javascript 
Add a index.js containing:

const express = require('express');

const app = express( );

app.get('/', (request, response) => {

return response.json({

event: "Semana Omnistack",

user: "Fernando Lima"

})

})

app.listen(3333)

⇒ at the terminal : node index.js

Put the server up again and check the response.
```

**Day 2:  Backend**

At this point Insomnia will be useful for testing requests

**Methods:**

- Get: get a info
- Post: Create a info
- Put: Edit a info
- Delete: Delete a info

**Types of parameters**

Query Params: parameters sent using the route (named), after "?" , they are

used mainly for filters and pagination. To access you ask for

const params = request.query

You will get the info from the request (named params, name, page, etc)

Route Params: to identify resources, a ID for example users/1093

const params = request.params

Request Body: Body of requisition, in a form : name, age, email...

const body = request.body

After the method , you need to inform the route and the resource

(route is the full path), and the resource is for example /users /contact

---

### Note:

You need to inform to express that you are going to use JSON in the requisitions, otherwise always will return undefined

So, at the beginning of index (Before routes) : 

*app.use( express.json( ) );* 

---

**Nodemon:**

$ npm install nodemon -D

In the package.json rewrite the script "test"  to "start"

*"scripts": {*

*"start": "nodemon index.js"*

*},*

Put down the server and Put Up again using **npm start**

---

About the **Database**, in this project we will run SQL and using a QueryBuilder called **Knex**. ([http://knexjs.org/](http://knexjs.org/))$ 

$ npm install knex

$ npm install sqlite3

$ npx knex init

A file called knexfile.js will be added in your project

Go to this file, there are some configs for different Databases.

Add a folder called src (folder will keep the structure)

Add a file called routes (Keep routes and methods)

*const express = require('express');*

*const routes = express.Router();*

obs: the *app.get* change to  *routes.get(...)*

*module.exports = routes;*

 Sure that you have to import routes in the index.js

*app.use(routes*)

Change the path in the package.json for nodemon to src/index.js

Add a folder inside SRC named database

Change in knexfile.js as follow:

*development: {*

*client: 'sqlite3',*

*connection: {*

*filename: './src/database/db.sqlite'}*

*},*

Now, considering that we have the wireframes and prototypes of the interface as below:

Who are the entities to be created at DB?

Ongs

### Incidents

What are the functionalities?

Ong Register / User Register

Login / Logout - ONG

Register of Incidents (New Incidents)

Delete Incidents

List of incidents in General

List of Incidents of Ong's Incidents

Get in Contact - Email

Get in Contact - WhatsApp

---

### Creating Tables using Knex - Migration

Add a folder named migrations in the database folder

Inform to your knexfile.js :

*filename: './src/database/db.sqlite'*

*},*

*migrations:{*

*directory: './src/database/migrations*'

*}*

[http://knexjs.org/#Migrations-CLI](http://knexjs.org/#Migrations-CLI)

$ npx *knex migrate:make create_ongs*

attention: this create the migration, so use a name related to a migration. what is it doing?

If you want , remove warning at the console using useNullAsDefault: true at knexfile after migrations.

Go to the file created (related migration) and set up the table.

*exports*.up = function.createTable(knex) {

return knex.schema.createTable('ongs', function(table){

table.string('id').primary();

table.string('name').notNullable();

table.string('email').notNullable();

table.string('whatsapp').notNullable();

table.string('city').notNullable();

table.string('uf', 2).notNullable();

});

};

The method down is used to drop in case of trouble.

*exports.down = function(knex) {*

*return knex.schema.dropTable('ongs');*

*};*

$ npx knex migrate:latest

**Do the same with incidents!**

$ npx knex migrate:make create_incidents

*exports*.up = function (knex) {

return knex.schema('incidents', function (table) {

table.increments();

table.string('title').notNullable();

table.string('description').notNullable();

table.decimal('value').notNullable();

table.string('ong_id').notNullable();

table.foreign('ong_id').references('id').inTable('ongs');

});

};

*exports*.down = function (knex) {

return knex.schema.dropTable('incidents');

};

$ npx knex migrate:latest

If you want to undo :

$ npx knex 

$ npx knex  migrate:rollback 

*** Will dismiss the last migration

To check the all migrations executed: 

$ npx knex migrate:status

***In case of error, just delete dl.sqlite check the file which we create data.

and repeat the commmand knex latest ...

Create a file named connection.js in the database folder containing:

const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development);

modules.*exports* = connection;

all controllers will use this connection to process the requests.

---

### Go to Insonmia, add routes in a new Workspace.

And in the routes.js

**Updating the Structure**

Add folder controllers in src

The methods will be there, store,  update, delete, index, 

Create the related methods for each Controller.

Check out the code ;) 

$ npm install cors 

and At the Index

const cors = require('cors')

app.use(cors())
