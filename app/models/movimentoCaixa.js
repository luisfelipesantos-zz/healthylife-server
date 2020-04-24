module.exports = (sequelize, DataTypes) => {
    const MovimentoCaixa = sequelize.define('MovimentoCaixa', {
        idCaixa: DataTypes.INTEGER,
        horaInicio: DataTypes.DATE,
        horaFim: DataTypes.DATE,
        idOperador: DataTypes.INTEGER
    }, {});

    MovimentoCaixa.associate = function(models) {
        MovimentoCaixa.belongTo(models.Caixa, {foreignKey: 'idCaixa', as: 'caixa'});
        MovimentoCaixa.belongTo(models.Operador, {foreignKey: 'idOperador', as: 'operador'});
        MovimentoCaixa.hasMany(models.Compra, {as: 'compras'});
    }
    return MovimentoCaixa;
}