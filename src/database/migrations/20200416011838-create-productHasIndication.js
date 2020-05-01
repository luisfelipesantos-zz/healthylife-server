module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('ProdutoHasIndicacao', {
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
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('ProdutoHasIndicacao');
    }
};
