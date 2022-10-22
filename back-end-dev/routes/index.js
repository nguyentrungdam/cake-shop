const product = require('./products');
const category = require('./categories');

function routes(app) {
    app.use('/products', product);
    app.use('/categories', category)
}

module.exports = routes;