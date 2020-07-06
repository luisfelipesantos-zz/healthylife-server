module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        ProdutoId: DataTypes.INTEGER,
        CompraId: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        valor: DataTypes.DECIMAL(10, 2)
    });

    Item.associate = function(models) {
        Item.belongsTo(models.Compra, { as: 'Compra' });
        Item.belongsTo(models.Produto, { as: 'Produto' });
    }

    return Item;
}