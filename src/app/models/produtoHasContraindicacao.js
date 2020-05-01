module.exports = (sequelize, DataTypes) => {
    const ProdutoHasContraIndicacao = sequelize.define('ProdutoHasContraIndicacao', {
        ProdutoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Produto',
                key: 'id'
            }
        },
        ContraindicacaoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Contraindicacao',
                key: 'id'
            }
        }
    }, {});

    return ProdutoHasContraIndicacao;
}