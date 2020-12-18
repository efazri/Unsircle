'use strict';
const bcryptjs = require ('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Policy)
    }
  };
  User.init({
    firstName: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name cannot be empty'
        }
      }
    },
    lastName: DataTypes.STRING,
    email: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password cannot be empty'
        }
      }
    },
    phoneNumber: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Phone number cannot be empty'
        }
      }
    },
    PolicyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(value) {
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(value.password, salt)
        value.password = hash

        if (!value.PolicyId) {
          value.PolicyId = 2
        }
      }
    }
  });
  return User;
};