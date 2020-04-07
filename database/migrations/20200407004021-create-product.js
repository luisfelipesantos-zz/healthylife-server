module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Produto', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nome: {
                allowNull: false,
                type: DataTypes.STRING
            },            
            preco: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            descricao: {
                type: DataTypes.TEXT
            },
            imagem: {
                type: DataTypes.BLOB
            },
            idCategoria: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Categoria',
                    key: 'id'
                }
            },
        });
    },
    down: (queryInterface) => {
         return queryInterface.dropTable('Produto');
    }
};
