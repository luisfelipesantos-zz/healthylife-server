module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Caixa', {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            data: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Caixa');
    }
};
