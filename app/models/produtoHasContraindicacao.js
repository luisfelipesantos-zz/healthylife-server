module.exports = (sequelize, DataTypes) => {
    const ProdutoHasContraIndicacao = sequelize.define('ProdutoHasContraIndicacao', {
        idProduto: DataTypes.INTEGER,
        idContraIndicacao: DataTypes.INTEGER
    }, {});

    Indicacao.associate = function(models){
        ProdutoHasContraIndicacao.belongsTo(models.Produto, {foreignKey: 'idProduto'});
        ProdutoHasContraIndicacao.belongsTo(models.ContraIndicacao, {foreignKey: 'idContraIndicacao'});
    }

    return ProdutoHasContraIndicacao;
}