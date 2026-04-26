const graphql = require("graphql");
const {    
    GraphQLEnumType,
   
} = graphql;

const DistributorEnum = new GraphQLEnumType({
    name: 'Distributor',
    values: {
        RNDC: { value: 'RNDC' },
        SGPROOF: { value: 'SGPROOF' },
        EAGLE: { value: 'EAGLE' },
        HEIDLEBURG: { value: 'HeidleBurg' },
        RIVERCITY: { value: 'Rivercity' },
        STANDARDSALES: { value: 'Standard Sales' }
    }
});

module.exports = {DistributorEnum }