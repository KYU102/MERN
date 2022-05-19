const { Author } = require("../models/author.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}


//CREATE
module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

//READ
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

//GET ONE
module.exports.oneAuthor = (req, res) => {
    // console.log(req.params.author_id )
    Author.findOne({ _id: req.params.author_id })
        .then(oneAuthor => res.json( oneAuthor ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.author_id }, req.body, { new: true, runValidators:true })
        .then(updateAuthor => res.json({ Author: updateAuthor }))
        .catch(err => res.status(400).json( err ));
};


//DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};