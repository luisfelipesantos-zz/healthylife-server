module.exports = (sequelize, DataTypes) => {
    const TipoPagamento = sequelize.define('TipoPagamento', {
        nome: DataTypes.STRING
    }, {});

    TipoPagamento.associate = function(models) {
        TipoPagamento.hasMany(models.Pagamento, {as: 'pagamentos'});
    }

    return TipoPagamento;
}