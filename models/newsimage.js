module.exports = (sequelize, DataTypes) => {
	const NewsImage = sequelize.define(
		'NewsImage',
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

	NewsImage.associate = (models) => {
		NewsImage.belongsTo(models.News, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return NewsImage
}
