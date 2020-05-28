module.exports = (sequelize, DataTypes) => {
	const news_image = sequelize.define(
		'news_image',
		{
			href: {
				type: DataTypes.STRING,
			},
		},
		{
			schema: 'crawler',
			timestamps: false,
		},
	)

	news_image.associate = (models) => {
		news_image.belongsTo(models.news, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return news_image
}
