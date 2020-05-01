module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nome: DataTypes.STRING
    }, {});

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Produto, {foreignKey: 'CategoriaId', as: 'produtos'});
    }

    
    return Categoria;
}