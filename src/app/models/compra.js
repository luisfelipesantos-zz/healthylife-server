module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define('Compra', {
        valorTotal: DataTypes.DECIMAL,
        valorDesconto: DataTypes.DECIMAL,
        dataHora: DataTypes.DATE,
        MovimentoCaixaId: DataTypes.INTEGER
    }, {});

    Compra.associate = function(models) {
        Compra.hasMany(models.Pagamento, { foreignKey: 'CompraId', as: 'pagamentos' });
        Compra.belongsTo(models.MovimentoCaixa, { as: 'movimentoCaixa'});
        Compra.hasMany(models.Item, { foreignKey: 'CompraId',as: 'itens'});
    }
    
    return Compra;
}