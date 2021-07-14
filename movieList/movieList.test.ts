import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// afterAll(async () => {
//     await driver.quit()
// })

test('Add Movie to List', async () => {
    let addMovie = await driver.findElement(By.xpath('//input'))
    let testString = 'Top Gun'
    await addMovie.sendKeys(`${testString}\n`)

    await driver.sleep(2000)
    
    let crossMovie = await driver.findElement(By.xpath('//ul/li/span'))
    await crossMovie.click()
    
    await driver.sleep(2000)
    
    await crossMovie.click()
    
    await driver.sleep(2000)

    let deleteString = testString.split(" ").join("")
    
    let deleteMovie = await driver.findElement(By.id(deleteString))
    await deleteMovie.click()
    
    await driver.sleep(2000)
})


