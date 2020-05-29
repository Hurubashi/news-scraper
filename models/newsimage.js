module.exports = (sequelize, DataTypes) => {
	const NewsImage = sequelize.define(
		'NewsImage',
		{
			url: {
				type: DataTypes.STRING(2048),
			},
		},
		{
			schema: 'crawler',
			timestamps: false,
			underscored: true,
		},
	)

	NewsImage.associate = (models) => {
		NewsImage.belongsTo(models.News, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return NewsImage
}
