const express = require('express');
const OngsController = require('./controllers/OngsController');
const crypto = require('crypto');
const CasesController = require('./controllers/CasesController');
// const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// routes.post('/session', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/cases', CasesController.index);
routes.post('/cases', CasesController.create);
// routes.delete('/cases/:id', CasesController.delete);

// routes.get('/profile', ProfileController.index);

module.exports = routes;