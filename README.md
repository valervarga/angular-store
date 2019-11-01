# STORE APP
A simple CRUD application with some basic authentication checks using JWT.

## Technologies:
* Database: MongoDB
* Server: Express
* Frontend: Angular
* Backend: NodeJS


## Project Information
* Node version: ```v10.13.0```
```
nvm install 10.13.0
nvm use 10.13.0
```
* NPM version: ```6.4.1```
* MongoDB Version:  ```v4.0.9```


## Project Installation
Start the command line from root of the folder and enter the following commands.

### Database
Download and install MongoDB from their site: ```https://www.mongodb.com/download-center```
For easier and faster use, you can add your installation ```path``` to ```system variables```
* Start the MongoD server (if everything is installed correctly and after you restarted your operation system, the service should run automatically on startup, so you can skip this command)
```mongod```
* Open the Mongo Shell
```mongo```
* Create database called ***store***
```use store```
* Create collection and insert some dummy products data 
```
db.products.insert([
	{
		"title": "Product One",
		"description": "Duo quot meis atqui te, feugiat molestie eam ei. Ea mutat iracundia inciderint pri, at mea tation delectus hendrerit. Vis paulo labore labitur et, cum delenit verterem ne. Solum zril detraxit sit et. Ex ius verear interpretaris, ius eu quot falli antiopam, voluptaria cotidieque vel ei.",
		"available": true,
		"price": 650,
	},
	{
		"title": "Product Two",
		"description": "Nam ut inani choro aliquip. An oportere dissentiet deterruisset vix, ne sint detracto his. Ad vim porro dictas, an explicari prodesset contentiones est, eu ius wisi magna. Tibique temporibus et nam. Sea no alii vocent, cu mea choro impetus philosophia. Vel dolores instructior ei, his ei virtute officiis reformidans, cum in tale elitr suscipit. Et unum omnium abhorreant his, natum latine id sea, id est esse illum dignissim.",
		"available": false,
		"price": 1275,
	}
])
```


### Backend
Change directory to backend, install dependencies and start the backend API server.
```
cd backend
npm install
npm start
```

The API server should run on ***localhost:3000***
The project uses ***nodemon*** and it will automatically restart the node application when file changes in the directory are detected.


### Frontend
Install Angular CLI Globally (if you don't have it already).
```
npm install -g @angular/cli
```

Change directory to frontend, install dependencies and start the frontend server in a new tab.
```
cd frontend
npm install
ng serve --open
```

The site should open on ***localhost:4200***
