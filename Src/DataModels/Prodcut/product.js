const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema({
  // Matches id: { type: GraphQLID }
  // MongoDB provides _id automatically, but we can define the rest
  name: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String 
  },
  isDiscontinued: { 
    type: Boolean, 
    default: false 
  },
  purchase_cost: { 
    type: Number, 
    default: 0 
  },
  selling_cost: { 
    type: Number, 
    default: 0 
  },
  // Matches subCategory resolve (stores the foreign key)
  subCatId: { 
    type: String, // Or mongoose.Schema.Types.ObjectId if using Mongo IDs
    required: true 
  },
  // Matches distributor: { type: DistributorEnum }
  distributor: { 
    type: String 
  },
  // Note: We don't store 'stocks' here because your GraphQL type 
  // calculates it dynamically from the inventory_history.
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

module.exports = mongoose.model('Product', productSchema);