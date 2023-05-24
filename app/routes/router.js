const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000


router.get('/api', (req, res) => {
    res.json({
        'All Stores': `http://localhost:${PORT}/api/store`
    })
})

router.use('/api/store', require('./api/storeRoutes'))

module.exports = router