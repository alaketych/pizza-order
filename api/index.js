const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/", (request, response) => {
    response.send({ message: "We did it!" })
})

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => {
    console.log(`Server is running on PORT: ${app.get('port')}`)
})