module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Item', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            idProduto: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Produto',
                    key: 'id'
                }
            },
            idCompra: {
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
