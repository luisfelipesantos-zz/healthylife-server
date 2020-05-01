module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define('Pagamento', {
        valor: DataTypes.DECIMAL, 
        TipoPagamentoId: DataTypes.INTEGER, 
        CompraId: DataTypes.INTEGER
    });

    Pagamento.associate = function(models) {
        Pagamento.belongsTo(models.TipoPagamento, { as: 'tipoPagamento' });
        Pagamento.belongsTo(models.Compra, { as: 'compra' });
    }

    return Pagamento;
}