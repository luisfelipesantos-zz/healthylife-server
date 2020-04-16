module.exports = {
    up: (queryInterface, Sequelize) => {
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
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Compra');
    }
};
