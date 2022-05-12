const express = require("express");
const app = express();
const port = 8002;
const { faker } = require('@faker-js/faker');
const Users = require('./Users');
const Companies = require("./Companies");


app.get('/', (req, res) => {
    res.send('<h1>YO YO YO</h1>')
})

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/users/new', (req, res) => {
    res.json(new Users())
})

app.get('/api/companies/new', (req, res) => {
    res.json(new Companies())
})

app.get('/api/users/companies', (req, res) => {
    res.json({
        "Users": new Users(),
        "Companies" : new Companies()
    })
})

// app.get('/api/superheroes/:id', (req, res) => {
//   res.json({ msg: `Getting Hero: ${req.params.id}` })
// })

// app.put('/api/superheroes/:id', (req, res) => {
//   res.json({ msg: `Updating Hero: ${req.params.id}` })
// })

// app.delete('/api/superheroes/:id', (req, res) => {
//   res.json({ msg: `Deleting Hero: ${req.params.id}` })
// })

app.listen(8002, () => console.log('Listening on port 8002'));