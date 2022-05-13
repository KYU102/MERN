const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke: {
		type: String,
		required: [true, 'Please enter joke.']
	},
	
	punchLine: {
		type: String,
		required: [true, 'Please enter punch line.']
	}
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;