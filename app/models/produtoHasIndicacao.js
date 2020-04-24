module.exports = (sequelize, DataTypes) => {
    const ProdutoHasIndicacao = sequelize.define('ProdutoHasIndicacao', {
        idProduto: DataTypes.INTEGER,
        idIndicacao: DataTypes.INTEGER
    }, {});

    Indicacao.associate = function(models){
        ProdutoHasIndicacao.belongsTo(models.Produto, {foreignKey: 'idProduto'});
        ProdutoHasIndicacao.belongsTo(models.Indicacao, {foreignKey: 'idIndicacao'});
    }

    return ProdutoHasIndicacao;
}