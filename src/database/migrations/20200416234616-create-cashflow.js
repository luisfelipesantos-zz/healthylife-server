module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('MovimentoCaixa', {
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            idCaixa: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Caixa',
                    key: 'id'
                }
            },
            horaInicio: {
                type: DataTypes.DATE
            },
            horaFim: {
                type: DataTypes.DATE
            },
            idOperador: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Operador',
                    key: 'id'
                }
            }
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('MovimentoCaixa');
    }
};
