module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        idProduto: DataTypes.INTEGER,
        idCompra: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        valor: DataTypes.DECIMAL
    });

    Item.associate = function(models) {
        Item.belongsTo(models.Compra, {foreignKey: 'idCompra', as: 'compra'});
        Item.belongsTo(models.Produto, {foreignKey: 'idProduto', as: 'produto'});
    }

    return Item;
}