module.exports = (sequelize, DataTypes) => {
    const ContraIndicacao = sequelize.define('ContraIndicacao', {
        nome: DataTypes.STRING
    }, {});

    ContraIndicacao.associate = function(models) {
        ContraIndicacao.belongsToMany(models.Produto, {through: 'ProdutoHasContraIndicacao', foreignKey: 'idContraIndicacao', as: 'produtos'});
    }

    return ContraIndicacao;
}