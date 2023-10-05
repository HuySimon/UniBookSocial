'use strict';
const bcrypt = require('bcryptjs')
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
    }
    validatePassword(candidatePassword, userPassword) {
      return bcrypt.compareSync(candidatePassword, userPassword);
    }
  }
  User.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    username: DataTypes.STRING,
    avatar: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    status: DataTypes.STRING,
    role: DataTypes.INTEGER,
    linkFacebook: DataTypes.STRING,
    linkZalo: DataTypes.STRING,
    linkInstagram: DataTypes.STRING,

  }, {
    hooks: {
      beforeCreate: async function (instance, options) {
        instance.username = instance.firstName + ' ' + instance.lastName
        instance.avatar = 'avatarDefault.jpg'
        instance.coverImage = 'coverImageDefault.jpg'
        instance.password = await bcrypt.hash(instance.password, 12);
        instance.role = 1
        instance.status = 'Active'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};