1. Create a new folder for project
2. rightclick folder and open terminal 
3. npx create-react-app client
4. cd client
5. npm install axios react-router-dom
6. npm start

    if npm start doesnt work: 
    1. cd client 
    2. rm -rf node_modules *.json
    3. copy both package.json from product manager and paste it into client folder
    4. npm i 
    5. npm start

7. right click project folder and right click into terminal
8. mkdir server (to create server file)
9. cd server
10. npm init -y
11. npm install express mongoose cors
12. vs code: go into sever folder and create server.js file
13. copy and paste into server.js:

    const express = require('express');
    const app = express();
    const port = 8000;

    require("./config/mongoose.config")

    app.use(express.json())
    app.use(express.urlencoded({exteneded:true}))


    app.listen(port, () => console.log(`Locked and Loaded on: ${port}`) );

14. create folders
    15. - config
        mongoose.config.js 
        
        COPY AND PASTE: 
        
        const mongoose = require("mongoose");

        mongoose.connect("mongodb://localhost/!!!!make sure to add DB name here!!!!!!!", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log("Established a connection to the database"))
            .catch(err => console.log("Something went wrong when connecting to the database", err));

    16. - models
        projectname.model.js

        COPY AND PASTE AND CHANGE NAMES:

        const mongoose = require("mongoose")

        const AuthorSchema = mongoose.Schema({
            title:{
                type:String
            },
            price:{
                type:Number
            },
            description:{
                type:String
            }
        }, {timestamps:true})

        module.exports.Product = mongoose.model("Author", AuthorSchema)
    
    
    
    - controllers


    - routes


    basically copy and paste from previus assingments for the rest of the files
    !!!!! DONT FORGET TO CHANGE THE NAMES !!!!!!!!
