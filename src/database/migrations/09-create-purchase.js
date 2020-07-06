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
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            valorDesconto: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            MovimentoCaixaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'MovimentoCaixa',
                    key: 'id'
                }
            },
            dataHora: { //adicionado depois do migration de update
                type: DataTypes.DATE,
                allowNull: false 
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Compra');
    }
};
