export default function (app) {
  console.log('got app', app)

  app.get('/', (req, res, next) => res.status(200).send('sector server running'))
}

