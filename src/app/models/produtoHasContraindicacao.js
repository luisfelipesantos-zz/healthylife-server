module.exports = (sequelize, DataTypes) => {
    const ProdutoHasContraIndicacao = sequelize.define('ProdutoHasContraIndicacao', {
        idProduto: DataTypes.INTEGER,
        idContraIndicacao: DataTypes.INTEGER
    }, {});

    ProdutoHasContraIndicacao.associate = function(models){
        ProdutoHasContraIndicacao.belongsTo(models.Produto, {foreignKey: 'idProduto'});
        ProdutoHasContraIndicacao.belongsTo(models.Contraindicacao, {foreignKey: 'idContraIndicacao'});
    }

    return ProdutoHasContraIndicacao;
}