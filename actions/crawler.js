const cheerio = require('cheerio')
const axios = require('axios')

const newsToLoad = 5

async function getNewsUrls() {
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

async function printUlrs() {
	const urls = await getNewsUrls()
	console.log(urls)
}

// printUlrs()
