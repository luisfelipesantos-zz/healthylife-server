module.exports = {
    up: (queryInterface, DateTypes) => {
        return queryInterface.changeColumn(
            'Produto',
            'imagem', {
                type: DateTypes.STRING,
                allowNull: false            
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
            'Produto',
            'imagem', {
                type: DateTypes.BLOB,
                allowNull: false            
            }
        );
    }
};
