const jokeController = require('../controllers/jokeController')

module.exports = (app) => {
  app.get("/api/jokes/", jokeController.findAllJokes);
  app.get("/api/jokes/:id", jokeController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", jokeController.updateExistingJoke);
  app.post("/api/jokes/new", jokeController.createNewJoke);
  app.delete("/api/jokes/delete/:id", jokeController.deleteAnExistingJoke);
};