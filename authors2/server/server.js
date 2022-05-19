const express = require('express');
const app = express();
const cors = require("cors")
const port = 8001;

require("./config/mongoose.config")

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({exteneded:true}))

// const teamRoutes = require("./routes/team.route")
// teamRoutes(app)

app.listen(port, () => console.log(`Locked and Loaded! on: ${port}`));