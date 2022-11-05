const express = require('express')
const app = express()

app.use('/', require('./routes/router'))

app.listen(4000, (req, res) => {
    console.log('Listening on port http://localhost:4000')
})

