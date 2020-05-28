module.exports = (sequelize, DataTypes) => {
	const news = sequelize.define(
		'news',
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			author: {
				type: DataTypes.STRING,
			},
			date: {
				type: DataTypes.DATE,
			},
		},
		{
			schema: 'crawler',
			timestamps: false,
		},
	)

	news.associate = (models) => {
		news.hasMany(models.news_image, {
			onDelete: 'cascade',
		})
	}

	return news
}
