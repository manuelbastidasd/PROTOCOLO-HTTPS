module.exports = function(app) {

    var customers = require('../controllers/customer.controller.js');

    // Crea un nueva estructura
    app.post('/api/customers', customers.create);

    // Regresa las estructuras
    app.get('/api/customers', customers.encontrarTodos);

    // Regresa una estructura segun la ID
    app.get('/api/customers/:id', customers.encontrarUno);

    // Actualizar una estructura por ID
    app.put('/api/customers/:id', customers.update);

    // Eliminar una estructura por ID
    app.delete('/api/customers/:id', customers.delete);
}