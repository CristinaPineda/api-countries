const UsuarioController = require('../Controllers/UsuarioController');
module.exports = (app) => {
   app.post('/countries', UsuarioController.post);
   app.put('/countries/:id', UsuarioController.put);
   app.delete('/countries/:id', UsuarioController.delete);
   app.get('/', UsuarioController.get);
   app.get('/countries/:id', UsuarioController.getById);
}
