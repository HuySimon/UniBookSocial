"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.Post, { targetKey: 'id', foreignKey: 'post', as: 'postData' })
      Notification.belongsTo(models.User, { targetKey: 'id', foreignKey: 'userSend', as: 'userSendData' })

      // define association here
    }
  }
  Notification.init(
    {
      isSeen: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        validate: {
          notNull: {
            msg: "Please provide a valid isSeen!",
          },
        },
      },
      typeNoti: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["Confirmed", "Unconfirmed", "Checking", "Violated", "Clear"]],
        },
      },
      content: DataTypes.TEXT,
      post: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Please provide a valid post!",
          },
        },
      },
      userSend: {
        allowNull: false,
        isNumeric: true,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Please provide a valid userSend!",
          },
        },
      },
      userReceive: {
        allowNull: false,
        isNumeric: true,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Please provide a valid userReceive!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
