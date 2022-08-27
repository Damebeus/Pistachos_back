const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('orderline', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1
		}

	},{ timestamps: false })
}