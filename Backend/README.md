## Introduction
Hi, this is a REST API to CRUD countries. It's written in Node.Js with the help of Express and MongoDB (to save everything). As MongoDB ORM, I use Mongoose.

## How to install
The mongodb that I use is in MongoDB Atlas (cloud), so you have a configuration file with a connection string and you don't need to install mongodb server.

First, you need to clone this repository. Then, go to client-side folder:

`cd Backend`

After that, to init this application you will need to:

`npm install`

And finnaly:

`npm start` OR `npm run dev (if you want to use nodemon)`

## Postman Collection
In dir api\postman-collection you have the postmand collection that you can import in postman. 
With this, you don't need to preocupate with what you need to input in request body to "create" a new country.

## Basic Authentication
For some requests (RUD), you need to add basic authentication. Inside configs dir, you can find the username and password used in this project.

