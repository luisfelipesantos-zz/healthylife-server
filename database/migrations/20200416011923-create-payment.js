module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Pagamento', {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            idTipoPagamento: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'TipoPagamento',
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
            valor: {
                type: DataTypes.DECIMAL,
                allowNull: false
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Pagamento');
    }
};
