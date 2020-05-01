module.exports = (sequelize, DataTypes) => {
    const Caixa = sequelize.define('Caixa', {
        data: DataTypes.DATE
    }, {});

    Caixa.associate = function(models) {
        Caixa.hasMany(models.MovimentoCaixa, { foreignKey: 'CaixaId', as: 'movimentoscaixa' })
    }

    return Caixa;
}