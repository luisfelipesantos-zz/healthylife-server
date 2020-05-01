module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.changeColumn(
            'Produto',
            'imagem', {
                type: DataTypes.STRING,
                allowNull: false            
            }
        );
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.changeColumn(
            'Produto',
            'imagem', {
                type: DataTypes.BLOB,
                allowNull: false            
            }
        );
    }
};
