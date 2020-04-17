module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Compra', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            valorTotal: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            valorDesconto: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            idMovimentoCaixa: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'MovimentoCaixa',
                    key: 'id'
                }
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Compra');
    }
};
