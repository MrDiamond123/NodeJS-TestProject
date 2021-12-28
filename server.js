const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(require('body-parser').urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/api/login', (req, res) => {
   console.log(req.body)
   res.send(`yo dog your login is <b>${req.body.email} - ${req.body.password}</b>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
