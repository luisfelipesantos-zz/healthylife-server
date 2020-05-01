module.exports = (sequelize, DataTypes) => {
    const ProdutoHasIndicacao = sequelize.define('ProdutoHasIndicacao', {
        ProdutoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Produto',
                key: 'id'
            }
        },
        IndicacaoId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Indicacao',
                key: 'id'
            }
        }
    }, {});

    return ProdutoHasIndicacao;
}