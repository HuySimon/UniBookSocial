'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    mainImage: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    isNew: DataTypes.BOOLEAN,
    isGeneralSubject: DataTypes.STRING,
    userConfirm: DataTypes.STRING,
    userPost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};