const AuthorController = require ("../controllers/author.controller")

module.exports = app => {
    app.get("/api/authors/test", AuthorController.test)
    app.post("/api/authors/new", AuthorController.create)
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:author_id", AuthorController.oneAuthor)
    app.put('/api/authors/:author_id', AuthorController.updateAuthor);
    app.delete('/api/authors/:author_id', AuthorController.deleteAuthor);
}