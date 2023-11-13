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
          isIn: [["Confirm", "Unconfirmed", "CheckPost", "Violation"]],
        },
      },
      content: DataTypes.TEXT,
      post: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
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
