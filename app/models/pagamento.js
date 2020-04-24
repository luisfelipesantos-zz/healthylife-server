module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define('Pagamento', {
        valor: DataTypes.DECIMAL, 
        idTipoPagamento: DataTypes.INTEGER, 
        idCompra: DataTypes.INTEGER
    });

    Pagamento.associate = function(models) {
        Pagamento.belongsTo(models.idTipoPagamento, {foreignKey: 'idTipoPagamento', as: 'tipoPagamento'});
        Pagamentos.belongsTo(models.Compra, {foreignKey: 'idCompra', as: 'compra'});
    }

    return Pagamento;
}