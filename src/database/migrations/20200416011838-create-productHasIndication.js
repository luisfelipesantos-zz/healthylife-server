module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('ProdutoHasIndicacao', {
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
