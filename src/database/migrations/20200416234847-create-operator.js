'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Operador', {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            nome: {
                allowNull: false,
                type: DataTypes.STRING
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Operador');
    }
};
