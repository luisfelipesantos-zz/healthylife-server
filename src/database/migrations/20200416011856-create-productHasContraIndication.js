module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('ProdutoHasContraIndicacao', {
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
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('ProdutoHasContraIndicacao');
    }
};
