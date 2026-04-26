const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = graphql;

const InventoryTransactionType = new GraphQLObjectType({
    name: 'InventoryTransaction',
    fields: () => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        type: { type: GraphQLString }, // "INITIAL", "INVOICE", "ADJUSTMENT", "SALE"
        quantity: { type: GraphQLInt }, // Positive for receiving, negative for sales
        invoice_number: { type: GraphQLString }, // Only for invoice types
        note: { type: GraphQLString }
    })
});
module.exports = { InventoryTransactionType }