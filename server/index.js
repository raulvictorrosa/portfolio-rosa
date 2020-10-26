const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    // server.use(function (err, req, res, next) {
    //   if (err.name === 'UnauthorizedError') {
    //     res
    //       .status(401)
    //       .send({ title: 'Unauthorized', detail: 'Unauthorized Access' });
    //   }
    // });

    const PORT = process.env.PORT || 3000
    server.use(handle).listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
