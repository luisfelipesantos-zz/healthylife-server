module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        ProdutoId: DataTypes.INTEGER,
        CompraId: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        valor: DataTypes.DECIMAL
    });

    Item.associate = function(models) {
        Item.belongsTo(models.Compra, { as: 'compra' });
        Item.belongsTo(models.Produto, { as: 'produto' });
    }

    return Item;
}