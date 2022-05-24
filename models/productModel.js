module.exports = function (sequelize, DataTypes) {
    const productModel = sequelize.define('productSchema', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        desc: {
            type: DataTypes.TEXT
        }
    });
    return productModel;
}