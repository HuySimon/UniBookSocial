'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Account.init({
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email không hợp lệ!'
        },
        notNull: {
          msg: 'Vui lòng nhập email'
        }
      }
    },
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: async function (instance, options) {
        instance.password = await bcrypt.hash(instance.password, 12);
        instance.role = 1
        instance.status = 'working'
      }
    },
    sequelize,
    modelName: 'Account',
  });
  return Account;
};