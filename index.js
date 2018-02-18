import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import mongoose from 'mongoose'
import lib from './lib'

const env = process.env

mongoose.connect('mongodb://localhost:27017/sector')
  .then(() => console.log('connected to mongoose'))
  .catch(err => console.log('error connecting to mongoose: ', err))

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())

lib.router(app)

exports.lib = lib
exports.sector = app

app.listen(env.PORT || 3000, () => {
  console.log(`* * * s e c t o r * * *  listening on port ${env.PORT || 3000}`)
})
