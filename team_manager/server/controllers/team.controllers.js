const { Team } = require("../models/team.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}


//CREATE
module.exports.create = (req, res) => {
    Team.create(req.body)
        .then(newTeam => res.json(newTeam))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

//READ
module.exports.allTeams = (req, res) => {
    Team.find()
        .then(allTeams => res.json(allTeams))
        .catch(err => res.json(err))
}

// //GET ONE
// module.exports.oneTeam = (req, res) => {
//     // console.log(req.params.team_id )
//     Team.findOne({ _id: req.params.team_id })
//         .then(oneTeam => res.json( oneTeam ))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// }

// //UPDATE
// module.exports.updateTeam = (req, res) => {
//     Team.findOneAndUpdate({ _id: req.params.team_id }, req.body, { new: true })
//         .then(updateTeam => res.json({ Team: updateTeam }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };


// //DELETE
// module.exports.deleteTeam = (req, res) => {
//     Team.deleteOne({ _id: req.params.team_id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };