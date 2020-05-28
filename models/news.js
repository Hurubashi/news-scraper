module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define(
		'News',
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
			underscored: true,
		},
	)

	News.associate = (models) => {
		News.hasMany(models.NewsImage, {
			onDelete: 'cascade',
		})
	}

	return News
}
