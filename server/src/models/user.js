'use strict';
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
      // define association here
      this.hasMany(models.Contact, { foreignKey: 'user', as: 'contacts' })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
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
    username: DataTypes.STRING,
    avatar: DataTypes.STRING,
    coverImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};