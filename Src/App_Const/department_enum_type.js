const graphql = require("graphql");
const {    
    GraphQLEnumType
} = graphql;

const DepartmentEnum = new GraphQLEnumType({
    name: 'Department_Enum',
    values: {
        TOBACCO: { value: 'Tobacco' },
        LIQUOR: { value: 'Liquor' },
        WINE: { value: 'Wine' },
        VAPE: { value: 'Vape' },
        GROCERY: { value: 'Grocery' },
        KRATOM:{ value:'Kratom'},
        BEER: { value:'Beer'}
    }
});

module.exports = { DepartmentEnum };