module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define('Pagamento', {
        valor: DataTypes.DECIMAL(10, 2), 
        TipoPagamentoId: DataTypes.INTEGER, 
        CompraId: DataTypes.INTEGER
    });

    Pagamento.associate = function(models) {
        Pagamento.belongsTo(models.TipoPagamento, { as: 'TipoPagamento' });
        Pagamento.belongsTo(models.Compra, { as: 'Compra' });
    }

    return Pagamento;
}