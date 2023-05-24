const express = require('express')
const router = express.Router()
// const PORT = process.env.PORT || 3000

const {storeDao: dao} = require('../../daos/dao')

router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})


// const url = `http://localhost:${PORT}/api/store`

// const fetch = (...args)=> import('node-fetch').then(({default: fetch})=>
// fetch(...args))

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     res.render('pages/store', {
//         title: 'All Stores',
//         name: 'All Stores',
//         data
//     })
// })
// router.get('/:id', (req, res) => {
//     dao.findById(res, dao.table, req.params.id)
//     router.get('/', (req, res) => {
//         const url = `http://localhost:${PORT}/store/api/${id}`
    
//         const fetch = (...args)=> import('node-fetch'). then(({ default: fetch})=> 
//         fetch(...args))
    
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/store_single', {
//                 title: `${data.title}`,
//                 name: `${data.title}`,
//                 data
//             })
//         })
//     })
// })


// router.post('/api/create', (req, res) => {
//     dao.create(req, res)
// })

// router.patch('/api/update/:id', (req, res) => {
//     dao.update(req, res)
// })
module.exports = router