module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Contraindicacao', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nome: {
                allowNull: false,
                type: DataTypes.STRING
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Contraindicacao');
    }
}
