const inventoryTransactions = [
  // Initial Stock setup for your 12 products
  { id: '1', productId: '1', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 24, note: 'Opening Stock' },
  { id: '2', productId: '2', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 2, note: 'Opening Stock' },
  { id: '3', productId: '3', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 120, note: 'Opening Stock' },
  { id: '4', productId: '4', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 12, note: 'Opening Stock' },
  { id: '5', productId: '5', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 15, note: 'Opening Stock' },
  { id: '6', productId: '6', date: '2026-01-01T08:00:00Z', type: 'INITIAL', quantity: 60, note: 'Opening Stock' },

  // Example of a "New Inventory" Invoice arrival
  { 
    id: '13', 
    productId: '1',      // Adding more Eagle Rare 10
    date: '2026-04-25T14:30:00Z', 
    type: 'INVOICE', 
    quantity: 12,        // Received 12 more
    invoiceNumber: 'INV-9982',
    note: 'Restock from RNDC' 
  }
];

module.exports = { inventoryTransactions };