const express = require('express');
const cors = require("cors")
const app = express();
const port = 8000;

require("./config/mongoose.config")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({exteneded:true}))

const productRoutes = require("./routes/product.route")
productRoutes(app)

app.listen(port, () => console.log(`Locked and Loaded on: ${port}`) );
