module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('ProdutoHasContraIndicacao', {
            idProduto: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Produto',
                    key: 'id'
                }
            },
            idContraIndicacao: {
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
