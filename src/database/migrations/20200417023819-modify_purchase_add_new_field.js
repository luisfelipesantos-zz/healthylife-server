module.exports = {
    up: (queryInterface, DateTypes) => {
        return queryInterface.addColumn(
            'Compra',
            'dataHora', {
                type: DateTypes.DATE,
                allowNull: false            
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Compra', 'dataHora');
    }
};
