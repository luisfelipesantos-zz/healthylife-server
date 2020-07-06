module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Pagamento', {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            TipoPagamentoId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'TipoPagamento',
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
            valor: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Pagamento');
    }
};
