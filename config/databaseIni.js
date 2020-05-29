const db = require('../models')

const schema = 'crawler'
async function initSchema() {
	try {
		await db.sequelize.createSchema(schema, { ifNotExists: true })
	} catch {
		console.log(`schema ${schema} already exists`)
	}
}

module.exports = async function databaseIni() {
	await initSchema()
	db.sequelize.sync().then(() => {
		console.log('Connection has been established successfully.')
	})
}
