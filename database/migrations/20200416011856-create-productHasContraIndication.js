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
            idIndicacao: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'ContraIndicacao',
                    key: 'id'
                }
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('ProdutoHasContraIndicacao');
    }
};
