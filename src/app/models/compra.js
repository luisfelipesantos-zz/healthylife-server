module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define('Compra', {
        valorTotal: DataTypes.DECIMAL,
        valorDesconto: DataTypes.DECIMAL,
        dataHora: DataTypes.DATE,
        idMovimentoCaixa: DataTypes.INTEGER
    }, {});

    Compra.associate = function(models) {
        Compra.belongsTo(models.MovimentoCaixa, {foreignKey: 'idMovimentoCaixa', as: 'movimentoCaixa'});
        Compra.hasMany(models.Pagamento, {as: 'pagamentos'});
        Compra.hasMany(models.Item, {as: 'itens'});
    }
    
    return Compra;
}