module.exports = (sequelize, DataTypes) => {
    const ContraIndicacao = sequelize.define('Contraindicacao', {
        nome: DataTypes.STRING
    }, {});

    ContraIndicacao.associate = function(models) {
        ContraIndicacao.belongsToMany(models.Produto, {through: 'ProdutoHasContraIndicacao', foreignKey: 'ProdutoId', as: 'produtos'});
    }

    return ContraIndicacao;
}