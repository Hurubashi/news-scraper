const db = require('./models')

async function initSchema() {
	try {
		await db.sequelize.createSchema('crawler', { ifNotExists: true })
	} catch {
		console.log('schema already axists')
	}
}

module.exports = async function databaseIni() {
	await initSchema()
	db.sequelize.sync().then(() => {
		console.log('Connection has been established successfully.')
	})
}
