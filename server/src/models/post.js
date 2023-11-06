"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Post.belongsTo(models.User, { targetKey: 'id', foreignKey: 'userPost', as: 'userPostData' })
			Post.hasOne(models.Report, { foreignKey: 'post', as: 'reportData' })
		}
	}
	Post.init(
		{
			title: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					notNull: {
						msg: "Please provide a valid title!",
					},
					notEmpty: {
						msg: "title mustn't be empty!",
					},
				},
			},
			price: {
				allowNull: false,
				type: DataTypes.FLOAT,
				validate: {
					notNull: {
						msg: "Please provide a valid price!",
					},
					notEmpty: {
						msg: "price mustn't be empty!",
					},
				},
			},
			mainImage: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					notNull: {
						msg: "Please provide a valid mainImage!",
					},
					notEmpty: {
						msg: "mainImage mustn't be empty!",
					},
				},
			},
			description: {
				type: DataTypes.TEXT,
			},
			status: {
				type: DataTypes.STRING,
				validate: {
					isIn: [["Confirm", "Unconfirmed", "Delivery", 'Violation','CheckPost']],
				},
			},
			isNew: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				validate: {
					notNull: {
						msg: "Please provide a valid isNew!",
					},
				},
			},
			isGeneralSubject: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				validate: {
					notNull: {
						msg: "Please provide a valid isGeneralSubject!",
					},
				},
			},
			userConfirm: {
				type: DataTypes.INTEGER,

				validate: {
					isNumeric: true,
				},
			},
			userPost: {
				allowNull: false,
				type: DataTypes.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				validate: {
					notNull: {
						msg: "Please provide a valid userConfirm!",
					},
					isNumeric: true,
				},
			},
		},
		{
			hooks: {
				beforeCreate: async function (instance, options) {
					instance.status = "Unconfirmed";
				},
			},
			sequelize,
			modelName: "Post",
		}
	);
	return Post;
};
