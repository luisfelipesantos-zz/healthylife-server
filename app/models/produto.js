module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: DataTypes.STRING,
        preco: DataTypes.DECIMAL,
        descricao: DataTypes.STRING,
        imagem: DataTypes.STRING,
        idCategoria: DataTypes.INTEGER
    }, {});

    Produto.associate = function(models){
        Produto.belongsTo(models.Categoria, {foreignKey: 'idCategoria', as: 'categoria'});
        Produto.hasMany(models.Item, {as: 'itens'});
        Produto.belongsToMany(models.Indicacao, {through: 'ProdutoHasIndicacao', foreignKey: 'idindicacao', as: 'indicacoes'});
        Produto.belongsToMany(models.ContraIndicacao, {trhough: 'ProdutoHasContraIndicacao', foreignKey: 'idContraIndicacao', as: 'ContraIndicacoes'});
    };
    return Produto;
}