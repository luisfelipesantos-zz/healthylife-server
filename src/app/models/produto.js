module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: DataTypes.STRING,
        preco: DataTypes.DECIMAL,
        descricao: DataTypes.STRING,
        imagem: DataTypes.STRING,
        CategoriaId: DataTypes.INTEGER
    }, {});

    Produto.associate = function(models){
        Produto.hasMany(models.Item, {foreignKey: 'ProdutoId', as: 'itens'});
        Produto.belongsTo(models.Categoria, { as: 'Categoria' });
        Produto.belongsToMany(models.Indicacao, {through: 'ProdutoHasIndicacao', foreignKey: 'IndicacaoId', as: 'indicacoes'});
        Produto.belongsToMany(models.Contraindicacao, {through: 'ProdutoHasContraIndicacao', foreignKey: 'ContraindicacaoId', as: 'contraindicacoes'});
    };
    return Produto;
}