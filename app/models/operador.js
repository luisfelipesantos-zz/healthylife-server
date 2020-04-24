module.exports = (sequelize, DataTypes) => {
    const Operador = sequelize.define('Operador', {
        nome: DataTypes.STRING
    }, {});

    Operador.associate = function(models) {
        Operador.hasMany(models.MovimentoCaixa, {as: 'movimentoscaixa'});
    }

    return Operador;
}