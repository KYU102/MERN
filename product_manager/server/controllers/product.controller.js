const { Product } = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}


//CREATE
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
}

//READ
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

//GET ONE
module.exports.oneProduct = (req, res) => {
    // console.log(req.params.product_id )
    Product.findOne({ _id: req.params.product_id })
        .then(oneProduct => res.json( oneProduct ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true })
        .then(updateProduct => res.json({ Product: updateProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.product_id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};