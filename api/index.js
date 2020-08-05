const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const start = require('./routes/start')
app.use('/', start)

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => {
    console.log(`Server is running on PORT: ${app.get('port')}`)
})