module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define(
		'News',
		{
			url: {
				type: DataTypes.STRING(2048),
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			author: {
				type: DataTypes.STRING,
			},
			text: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			schema: 'crawler',
			timestamps: false,
			underscored: true,
			indexes: [
				{
					unique: true,
					fields: ['url'],
				},
			],
		},
	)

	News.associate = (models) => {
		News.hasMany(models.NewsImage, {
			onDelete: 'cascade',
		})
	}

	return News
}
