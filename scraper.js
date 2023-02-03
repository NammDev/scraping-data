const scrapeCategory = async (browser, url) => {
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitForSelector('#webpage')

  // Locate the full title with a unique string
  const dataCategory = await page.evaluate(() => {
    let listLi = document.querySelectorAll('#navbar-menu > ul > li')
    listLi = [...listLi]
    return listLi.map((li) => ({
      category: li.querySelector('a').innerText,
      link: li.querySelector('a').href,
    }))
  })

  await page.close()
  return dataCategory
}

export { scrapeCategory }
