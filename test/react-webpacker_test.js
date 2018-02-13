import fs from 'fs'
import path from 'path'

import express from 'express'
import puppeteer from 'puppeteer'
import webpack from 'webpack'

import webpackConfig from '../webpack.config.js'

const compiler = webpack(webpackConfig)
compiler.run((err, stats) => {
  if (err) console.error(err)
  else if (stats.hasErrors())
    console.error('Error is occured while webpack compiling.')
})

const useComponentsHtml = fs.readFileSync(
  'test/use-components_expected.html',
  'utf8'
)
const renderComponentHtml = fs.readFileSync(
  'test/render-component_expected.html',
  'utf8'
)

const html = `
<html>
<body>
${renderComponentHtml}
${useComponentsHtml}
<script src="/packs/react-webpacker.js"></script>
</body>
</html>
`

const app = express()
app.get('/', (req, res) => res.status(200).send(html))
app.use(express.static(path.resolve(__dirname, '__build__')))

let browser
let page
let server

beforeAll(async () => {
  server = await app.listen(8888)
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
})

describe('tagged javascript', async () => {
  it('is worked properly.', async () => {
    await page.goto('http://localhost:8888/')
    const element = await page.$eval('body > div > h1', e => e.textContent)
    expect(element).toBe('test: 1')
  })
})

afterAll(async () => {
  await browser.close()
  await server.close()
})
