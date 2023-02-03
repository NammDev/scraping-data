import puppeteer from 'puppeteer'
import { scrapeCategory } from './scraper.js'

;(async () => {
  const url = 'https://phongtro123.com'
  const indexs = [1, 2, 3, 4]

  const browser = await puppeteer.launch()

  // Print the full title
  const dataCategory = await scrapeCategory(browser, url)
  console.log(dataCategory)

  await browser.close()
})()
