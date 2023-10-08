'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs')

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
      unique: true,
      validate: {
        isEmail: {
          msg: 'Please provide a valid email!'
        }
      }
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
        if (!instance.role) {
          instance.role = 1
        }
        instance.status = 'Active'
      },
      beforeSave: async function (instance, options) {
        if (instance.changed('password')) {
          instance.password = await bcrypt.hash(instance.password, 12);
        }
      }
    },
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['password']
      },
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ['password']
        }
      }
    }
  });
  return User;
};