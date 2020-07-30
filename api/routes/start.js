const express = require('express')
const router = express.Router()

// const dataBase = require('../controllers/database')

// router.get('/', function (request, response) {
//     dataBase.query('select * from pizza', (error, data) =>  {
//         if(error) throw error

//         console.log('Data received from DB:')
//         console.log(data)
//     })
// })

router.get("/", (request, response) => {
    response.send("We did it!")
})

module.exports = router