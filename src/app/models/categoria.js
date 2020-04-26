module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nome: DataTypes.STRING
    }, {});

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Produto, {as: 'produtos'});
    }

    
    return Categoria;
}