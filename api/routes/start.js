const data = require('../controllers/database')
const express = require('express')
const router = express.Router()

const querySelectAll = 'select * from '
const querySelectOne = 'select id from '

router.get('/', (request, response) => {
    try {
        const asd = data.query(querySelectAll + 'pizza', (error, data) =>  {
        if(error) throw error

        response.json(asd)
        console.log(data)
    })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }

})

router.get('/:pizzaId', (request, response) => {
    data.query()
})

module.exports = router