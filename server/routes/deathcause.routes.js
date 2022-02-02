const DeathCauseController = require('../controllers/deathcause.controller')

module.exports = function (app) {
    app.post('/api/deathcause/new', DeathCauseController.createDeathCause)
    app.get('/api/deathcauses', DeathCauseController.getAllDeathCause)
    app.get('/api/deathcauses/:id', DeathCauseController.getDeathCause)
    app.put('/api/deathcauses/:id', DeathCauseController.updateDeathCause)
    app.delete('/api/deathcauses/:id', DeathCauseController.deleteDeathCause)
}