module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define('Pagamento', {
        valor: DataTypes.DECIMAL, 
        idTipoPagamento: DataTypes.INTEGER, 
        idCompra: DataTypes.INTEGER
    });

    Pagamento.associate = function(models) {
        Pagamento.belongsTo(models.TipoPagamento, {foreignKey: 'idTipoPagamento', as: 'tipoPagamento'});
        Pagamento.belongsTo(models.Compra, {foreignKey: 'idCompra', as: 'compra'});
    }

    return Pagamento;
}