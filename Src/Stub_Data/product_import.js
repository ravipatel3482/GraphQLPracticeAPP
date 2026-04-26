const { tequilas } = require('./tequila_data');
const { brandies } = require('./brandy_data');
const { bourbons } = require('./bourbon_data');
const { rums } = require('./rum_data')
const { gins } = require('./gin_data')
const { cognacs } = require('./cognac_data')
const { products } = require('./product_data')
// Combine everything into one "allProducts" object
const allProducts = {
    bourbons,
    brandies,
    tequilas,
    rums,
    gins,
    cognacs,
    products
};

module.exports = { allProducts };