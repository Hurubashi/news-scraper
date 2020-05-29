const CrawlerActions = require('../actions/crawler')
const db = require('../models')

// @desc      Get news from ain.ua
// @route     GET /crawler/ain
// @access    Public

exports.getAinNews = async (req, res, next) => {
	const news = await CrawlerActions.getAinNews()
	const missingNews = await CrawlerActions.getNewsMissingInDb(news)
	let createdNews
	try {
		createdNews = await db.News.bulkCreate(missingNews)
	} catch (e) {
		return res.status(500).json(e)
	}
	try {
		const newsImages = await CrawlerActions.getNewsImagesData(createdNews, missingNews)
		let createdImgs = await db.NewsImage.bulkCreate(newsImages)
		const lastNews = await db.News.findAll({
			limit: CrawlerActions.newsToLoad,
			include: [db.NewsImage],
		})
		return res.status(200).json(lastNews)
	} catch (e) {
		return res.status(500).json(e)
	}
	return res.status(200).json(createdNews)
}
