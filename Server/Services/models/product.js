'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'name cannot be empty'
        }
      }
    
    },
    image_url: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'image url cannot be empty'
        }
      }
    
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [1],
          msg: 'price cannot be lower than 1'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [1],
          msg: 'stock cannot be lower than 1'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};