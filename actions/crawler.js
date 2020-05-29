'use strict'
const cheerio = require('cheerio')
const axios = require('axios')

const newsToLoad = 3

module.exports = class CrawlerActions {
	static async

	/**
	 * @returns {Array<CrawlerNews>}
	 */
	static async getAinNews() {
		let res = []
		const urls = await getAinNewsUrls()
		for (let i = 0; i < urls.length; i++) {
			const h = await getAinNewsByUrl(urls[i])
			res.push(h)
		}
		return res
	}

	/**
	 * @param {Array<CrawlerNews>} news
	 * @returns {Array<CrawlerNews>}
	 */
	static async getNewsMissingInDb(news) {}
}

/**
 * @description Returns Array of URLs for recent AIN News
 * with length of n. Where n is newsToLoad
 * @returns {Array<string>}
 */
async function getAinNewsUrls() {
	let urls = []
	const response = await axios.get('https://ain.ua/post-list/')
	if (response.data) {
		const $ = cheerio.load(response.data)

		$('.post-link').each((i, item) => {
			if (i < newsToLoad) urls.push(item.attribs['href'])
		})
	}
	return urls
}

/**
 * @description Return {CrawlerNews} for URL
 * @param {string} url
 * @return {CrawlerNews}
 */
async function getAinNewsByUrl(url) {
	/** @type {CrawlerNews} */
	let data = {
		url: url,
		images: [],
	}
	const response = await axios.get(url)
	if (response.data) {
		const $ = cheerio.load(response.data)

		data.title = $('h1').text()
		data.author = $('.author_name').text().trim()

		$('.post-content').each((i, item) => {
			data.text = $('p, h3', item).text()

			$('img', item).each((i, item) => {
				data.images.push(item.attribs['src'])
			})
		})
	}
	return data
}

/**
 * @typedef {{
 * url: string,
 * title: string,
 * author: string,
 * text: string,
 * images: Array
 * }}
 */
var CrawlerNews
