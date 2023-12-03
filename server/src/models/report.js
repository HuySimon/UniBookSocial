"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report.init(
    {
      user: {
        primaryKey: true,
        allowNull: false,
        isNumeric: true,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Please provide a valid user!",
          },
        },
      },
      post: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Please provide a valid post!",
          },
        },
      },
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
