const express = require('express');
const app = express();
const port = 8001;

require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({exteneded:true}))


app.listen(port, () => console.log(`Locked and Loaded on: ${port}`) );