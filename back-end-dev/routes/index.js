const product = require('./products');
const category = require('./categories');
const account = require('./accounts');
const errorHandler = require('../middlewares/errorHandler');

function routes(app) {
    app.use('/products', product);
    app.use('/categories', category)
    app.use('/accounts', account)
    app.use(errorHandler);
}

module.exports = routes;