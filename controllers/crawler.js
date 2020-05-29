const Crawler = require('../actions/crawler')
const db = require('../models')

// @desc      Get news from ain.ua
// @route     GET /crawler/ain
// @access    Public

exports.getAinNews = async (req, res, next) => {
	const news = await Crawler.getAinNews()
	let createdNews
	try {
		createdNews = await db.News.bulkCreate(news)
	} catch {
		res.status(500).json({})
	}

	// let imgsToCreate = []
	// for (let i = 0; i < createdNews.length; i++) {
	// 	const newsElem = await db.news.findOne({
	// 		where: {
	// 			url: news[i].url,
	// 		},
	// 	})

	// 	news[i].images.map((val) => {
	// 		val = {
	// 			news_id: newsElem.id,
	// 			url: newsElem.url,
	// 			src: val,
	// 		}
	// 	})
	// 	await db.NewsImage.bulkCreate(news[i].images)
	// }
	res.status(200).json(createdNews)
}
