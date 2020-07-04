module.exports = (sequelize, DataTypes) => {
    const Operador = sequelize.define('Operador', {
        nome: DataTypes.STRING,
        senha: DataTypes.STRING
    }, {});

    Operador.associate = function(models) {
        Operador.hasMany(models.MovimentoCaixa, { foreignKey: 'OperadorId', as: 'movimentoscaixa' });
    }

    return Operador;
}