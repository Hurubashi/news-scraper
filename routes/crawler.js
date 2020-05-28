const express = require('express')
const router = express.Router()

const crawler = require('../controllers/crawler')

router.get('/ain', crawler.getAinNews)

module.exports = router
