module.exports = (sequelize, DataTypes) => {
    const TipoPagamento = sequelize.define('TipoPagamento', {
        nome: DataTypes.STRING
    }, {});

    TipoPagamento.associate = function(models) {
        TipoPagamento.hasMany(models.Pagamento, { foreignKey: 'TipoPagamentoId', as: 'pagamentos'});
    }

    return TipoPagamento;
}