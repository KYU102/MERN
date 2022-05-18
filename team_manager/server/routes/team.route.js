const TeamController = require ("../controllers/team.controller")

module.exports = app => {
    // app.get("/api/teams/test", TeamController.test)
    app.post("/api/teams/new", TeamController.create)
    app.get("/api/teams", TeamController.allTeams)
    // app.get("/api/teams/:team_id", TeamController.oneTeam)
    // app.put('/api/teams/:team_id', TeamController.updateTeam);
    // app.delete('/api/teams/:team_id', TeamController.deleteTeam);
}