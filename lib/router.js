import Log from './models/Log'

export default function (app) {
  app.get('/', (req, res, next) => res.status(200).send('OK'))
  app.post('/', (req, res, next) => {
    const log = new Log(req.body)
    log.save()
    return res.status(200)
  })
  app.get('/', (req, res, next) => Log.find(req.query))

  return app
}

