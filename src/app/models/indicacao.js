module.exports = (sequelize, DataTypes) => {
    const Indicacao = sequelize.define('Indicacao', {
        nome: DataTypes.STRING
    }, {});

    Indicacao.associate = function(models) {
        Indicacao.belongsToMany(models.Produto, {through: 'ProdutoHasIndicacao', foreignKey: 'ProdutoId', as: 'produtos'});
    }

    return Indicacao;
}