const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventoryTransactionSchema = new Schema({
  productId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  date: { type: Date, default: Date.now },
  type: { 
    type: String, 
    required: true,
    enum: ['INITIAL', 'INVOICE', 'ADJUSTMENT', 'SALE', 'RETURN'] 
  },
  quantity: { 
    type: Number, 
    required: true // Positive for incoming, negative for outgoing
  },
  invoiceNumber: { type: String },
  note: { type: String },
  userId: { type: String } // Optional: track who made the change
}, { timestamps: true });

module.exports = mongoose.model('InventoryTransaction', inventoryTransactionSchema);