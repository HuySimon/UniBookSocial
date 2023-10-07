'use strict';
const { Model } = require('sequelize');
const crypto = require('crypto')

module.exports = (sequelize, DataTypes) => {
  class ResetPasswordToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    createPasswordResetToken() {
      const resetToken = crypto.randomBytes(32).toString('hex');
      this.value = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
      // console.log({ resetToken }, this.passwordResetToken);
      this.expired_at = Date.now() + 10 * 60 * 1000; // 10 minutes
      return resetToken;
    };
  }
  ResetPasswordToken.init({
    email: DataTypes.STRING,
    value: DataTypes.STRING,
    expired_at: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResetPasswordToken',
  });
  return ResetPasswordToken;
};