const express = require('express');
const app = express();
const cors = require("cors")
const port = 8000;

require("./config/mongoose.config")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({exteneded:true}))

const authorRoutes = require("./routes/author.route")
authorRoutes(app)

app.listen(port, () => console.log(`Locked and Loaded! on: ${port}`) );