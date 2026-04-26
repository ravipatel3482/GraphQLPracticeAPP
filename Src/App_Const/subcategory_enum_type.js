const { GraphQLEnumType } = require('graphql');
const SubCategoryEnum = new GraphQLEnumType({
    name: 'SubCategory_Enum',
    values: {
        MARLBORO_MAINLINE: { value: 'MarlboroMainLine' },
        MARLBORO_MENTHOL: { value: 'MarlboroMainlineMenthol' },
        SINGLE_BARREL: { value: 'Single Barrel' },
        SMALL_BATCH: { value: 'Small Batch' },
        WINTERGREEN: { value: 'Wintergreen' },
        DAIRY: { value: 'Dairy' },
        BUSCHAPPLE: { value:'BuschApple'}
    }
});

module.exports = { SubCategoryEnum };