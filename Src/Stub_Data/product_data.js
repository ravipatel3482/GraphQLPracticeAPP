const products = [
  // LIQUOR -> BOURBON
  { id: '1', name: 'Eagle Rare 10', subCatId: '103', company: 'Buffalo Trace', isDiscontinued: false,
      distributor: 'RNDC', stocks: 24, purchase_cost: 32.00, selling_cost: 45.00 },
  { id: '2', name: 'Pappy 15', subCatId: '104', company: 'Old Rip Van Winkle', isDiscontinued: true,
      distributor: 'RNDC', stocks: 2,  purchase_cost: 150.00, selling_cost: 999.00 },
  { id: '3', name: 'Buffalo Trace', subCatId: '104', company: 'Buffalo Trace', distributor: 'RNDC', stocks: 120, purchase_cost: 18.00, selling_cost: 28.00 },
  { id: '4', name: 'Weller Antique 107', subCatId: '104', company: 'Buffalo Trace', distributor: 'RNDC', stocks: 12, purchase_cost: 45.00, selling_cost: 85.00 },

  // LIQUOR -> TEQUILA (Assuming you added Tequila Category ID '9' and SubCat '106')
  { id: '5', name: 'Don Julio 1942', subCatId: '106', company: 'Diageo', distributor: 'SGPROOF', stocks: 15, purchase_cost: 110.00, selling_cost: 185.00 },
  { id: '6', name: 'Casamigos Blanco', subCatId: '106', company: 'Diageo', distributor: 'SGPROOF', stocks: 60, purchase_cost: 35.00, selling_cost: 52.00 },

  // TOBACCO -> CIGARETTES
  { id: '8', name: 'Marlboro Red Box', subCatId: '101', company: 'Altria', distributor: 'RNDC', stocks: 40, purchase_cost: 6.50, selling_cost: 9.50 },
  { id: '9', name: 'Marlboro Gold Menthol', subCatId: '102', company: 'Altria', distributor: 'RNDC', stocks: 45, purchase_cost: 6.50, selling_cost: 9.75 },

  // TOBACCO -> DIP
  { id: '10', name: 'Copenhagen Wintergreen', subCatId: '105', company: 'US Tobacco', distributor: 'RNDC', stocks: 20, purchase_cost: 3.50, selling_cost: 6.50 },
  
  // LIQUOR -> COGNAC
  { id: '12', name: 'Hennessy XO', subCatId: '107', company: 'LVMH', distributor: 'SGPROOF', stocks: 5, purchase_cost: 140.00, selling_cost: 220.00 }
];

module.exports = { products };