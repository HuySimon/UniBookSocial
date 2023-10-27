"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init(
    {
      numStars: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          notNull: {
            msg: "Please provide a valid numStarts!",
          },
          notEmpty: {
            msg: "numStarts mustn't be empty!",
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
      },
      user: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          notNull: {
            msg: "Please provide a valid user!",
          },
          notEmpty: {
            msg: "user mustn't be empty!",
          },
        },
      },
      post: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          notNull: {
            msg: "Please provide a valid post!",
          },
          notEmpty: {
            msg: "post mustn't be empty!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
