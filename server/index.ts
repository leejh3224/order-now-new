import * as serverless from 'serverless-http'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Application } from 'express'
import saveMocks from './mock/saveMocks'

import api from './api'
import db from './db'

const app: Application = express()
;(<any>db).connect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1', api)

app.use((err, req, res, next) => {
  console.error(err)
  return res.status(500).json({ error: err })
})

saveMocks('stores')

module.exports.handler = serverless(app)
