module.exports = (sequelize, DataTypes) => {
    const MovimentoCaixa = sequelize.define('MovimentoCaixa', {
        CaixaId: DataTypes.INTEGER,
        horaInicio: DataTypes.DATE,
        horaFim: DataTypes.DATE,
        OperadorId: DataTypes.INTEGER
    }, {});

    MovimentoCaixa.associate = function(models) {
        MovimentoCaixa.belongsTo(models.Caixa, { as: 'Caixa' });
        MovimentoCaixa.belongsTo(models.Operador, { as: 'Operador'});
        MovimentoCaixa.hasMany(models.Compra, { foreignKey: 'MovimentoCaixaId', as: 'compras' });
    }
    return MovimentoCaixa;
}