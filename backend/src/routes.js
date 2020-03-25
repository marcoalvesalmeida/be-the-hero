const express = require('express');

const routes = express.Router();
const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

routes.get('/ongs', OngController.list);

routes.post('/ongs', OngController.create);

/**
 *  Incidents
 */
routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/**
 *  Profile
 */
routes.get('/profile', ProfileController.list);

/**
 *  Session
 */
routes.post('/session', SessionController.login);

module.exports = routes;