
## Usage
This repository is a minimalistic stack for node.js, angular.js and mongoose.
Express.js is also used, but without the template language jade. The frontend is
designed directly in html.

You must have installed node.js on your computer. The node_modules are already in the repository
and it is not necessary to install them with npm.
Clone the repository to a local folder with: **git clone https://github.com/sasc1/node_angular.git ~/myprojectfolder**.

If you want the mongoose functionality, you must install mongodb and start the mongod server.
In folder config change *url* in the file dbconfig.js to your DB.
The example programm uses a model *mymodels*. So you must insert it in your DB with the following steps:

1. start mongo in command line
2. change to your DB with **use DBNAME** (replace DBNAME with your database name)
3. if you have authorization in place enter **db.auth("user","password")** (replace user and password with your credentials)
4. insert collection and documents with **db.mymodels.insert({_id:1,name:"me"});**

Now start the node server with: **node server.js** from the command line (you should cd to the node_angular folder before).
In the browser navigate to **localhost:300**. A button should be visible, press on it and a list of *mymodels* is displayed.


### Frameworks

[node.js](http://nodejs.org/)
[angular.js](https://angularjs.org/)
[mongoose](http://mongoosejs.com/)

