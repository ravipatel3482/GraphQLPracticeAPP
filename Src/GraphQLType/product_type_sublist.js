const { bourbons } = require('../Stub_Data/bourbon_data');
const { brandies } = require('../Stub_Data/brandy_data');
const { tequilas } = require('../Stub_Data/tequila_data');
const { rums } = require('../Stub_Data/rum_data')
const { gins } = require('../Stub_Data/gin_data')
const { cognacs } = require('../Stub_Data/cognac_data')


const subLists = {
    'Bourbon': bourbons,
    'Brandy': brandies,
    'Tequila': tequilas,
    'Rum': rums,
    'Gin': gins,
    'Cognec': cognacs
};

module.export = { subLists }