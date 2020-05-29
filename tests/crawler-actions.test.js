const { CrawlerActions, getAinNewsUrls } = require('../actions/crawler')

test(`func getAinNewsUrls: return ${CrawlerActions.newsToLoad} urls`, () => {
	return getAinNewsUrls().then((urls) => {
		expect(urls).toBeDefined()
		expect(urls.length).toBe(CrawlerActions.newsToLoad)
	})
})

test(`func getAinNews: return Array<CrawlerNews> with length of ${CrawlerActions.newsToLoad}`, () => {
	return CrawlerActions.getAinNews().then((news) => {
		news.forEach((elem) => {
			expect(elem.url).toBeDefined()
			expect(elem.title).toBeDefined()
			expect(elem.author).toBeDefined()
			expect(elem.text).toBeDefined()
			expect(elem.images).toBeDefined()
		})
		expect(news).toBeDefined()
		expect(news.length).toBe(CrawlerActions.newsToLoad)
	})
})
