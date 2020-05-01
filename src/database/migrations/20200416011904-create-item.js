module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Item', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            ProdutoId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Produto',
                    key: 'id'
                }
            },
            CompraId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Compra',
                    key: 'id'
                }
            },
            quantidade: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            valor: {
                allowNull: false,
                type: DataTypes.DECIMAL
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Item');
    }
};
