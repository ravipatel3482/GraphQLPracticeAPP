const graphql = require("graphql");
const {    
    GraphQLEnumType,
   
} = graphql;

const CategoryEnum = new GraphQLEnumType({
    name: 'Category_Enum',
    values: {
        BOURBON: { value: 'Bourbon' },
        WHISKEY: { value: 'Whiskey' },
        COGNAC: { value: 'Cognac' },
        RUM: { value: 'Rum' },
        CIGARETTES: { value: 'Cigarettes' },
        CIGAR: { value: 'Cigar' },
        DIP: { value: 'Dip' },
        CIGARELLO: { value: 'Cigarello' },
        SNACKS: { value: 'Snacks' },
        BEVERAGE: { value: 'Beverage' },
        BUSCHBEER:{ value:'BuschBeer'}
    }
});
module.exports = { CategoryEnum };