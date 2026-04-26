const graphql = require("graphql");
const { bourbons:Allbourbons } = require("../Stub_Data/bourbon_data");
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const BourbonType = new GraphQLObjectType({
    name: 'Bourbon',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        company: { type: GraphQLString },
        distributor: { type: GraphQLString }
    })
});
// RootQuery (Read-only)
const BourbonQueries = {
    // List Of All Bourbon 
    bourbons: {
        type: new graphql.GraphQLList(BourbonType),
        resolve() {
            return Allbourbons;
        }
    },
    // Get By Id 
    bourbon: {
        type: BourbonType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            // return bourbons.find(bourbon => bourbon.id === args.id);
            return _.find(Allbourbons, { id: args.id })
        }
    }
}

// Mutation (Write/Change)

const BourbonMutations = {
    // Add Bourbon
    addBourbon: {
        type: BourbonType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            company: { type: new GraphQLNonNull(GraphQLString) },
            distributor: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parent, args) {
            let newBourbon = {
                id: args.id,
                name: args.name,
                company: args.company,
                distributor: args.distributor,
            };
            Allbourbons.push(newBourbon);
            return newBourbon;
        }
    },
    // UPDATE: Modify an existing record
    updateBourbon: {
        type: BourbonType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString }, // Not NonNull, so we can update just one field
            company: { type: GraphQLString },
            distributor: { type: GraphQLString }
        },
        resolve(parent, args) {
            // let item = bourbons.find(b => b.id === args.id);
            let item = _.find(Allbourbons, { id: args.id });
            if (item) {
                if (args.name) item.name = args.name;
                if (args.company) item.company = args.company;
                if (args.distributor) item.distributor = args.distributor
                return item;
            }
            return null;
        }

    },
    // DELETE: Remove a record
    deleteBourbon: {
        type: BourbonType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(parent, args) {
            // const index = bourbons.findIndex(b => b.id === args.id);
            const index = _.find(Allbourbons, { id: args.id });
            if (index !== -1) {
                return bourbons.splice(index, 1)[0];
            }
            return null;
        }

    }
}


module.exports = {
    BourbonQueries: BourbonQueries,
    BourbonMutations: BourbonMutations
}