import puppeteer from 'puppeteer'
import { scrapeCategory, scrapeDetail } from './scraper.js'
import fs from 'fs'
;(async () => {
  const url = 'https://phongtro123.com'
  const indexs = [1, 2, 3, 4]

  const browser = await puppeteer.launch()

  // Print the full title
  const categories = await scrapeCategory(browser, url)
  const selectedCategories = categories.filter((cate, index) => indexs.some((i) => i === index))

  let result1 = await scrapeDetail(browser, selectedCategories[0].link)
  fs.writeFile('chothuephongtro.json', JSON.stringify(result1), (err) => {
    if (err) console.log(err)
  })

  let result2 = await scrapeDetail(browser, selectedCategories[1].link)
  fs.writeFile('nhachothue.json', JSON.stringify(result2), (err) => {
    if (err) console.log(err)
  })
  let result3 = await scrapeDetail(browser, selectedCategories[2].link)
  fs.writeFile('chothuecanho.json', JSON.stringify(result3), (err) => {
    if (err) console.log(err)
  })
  let result4 = await scrapeDetail(browser, selectedCategories[3].link)
  fs.writeFile('chothuematbang.json', JSON.stringify(result4), (err) => {
    if (err) console.log(err)
  })
  await browser.close()
})()
