const express = require("express");
const app = express();
const port = 8000


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const jokeRoutes = require('./server/routes/jokeRoutes')
// This is where we import the users routes function from our user.routes.js file
jokeRoutes(app)


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
