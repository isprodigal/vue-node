module.exports = app => {
    const express = require('express')

    const router = express.Router()

    const Itmes = require('../../models/Itmes')

    router.post('/items', async (req, res) => {
        console.log(123)
        const model = await Itmes.create(req.body)
        res.send(model)
    })
    router.get('/items', async (req, res) => {
        const items = await Itmes.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/items/:id', async (req, res) => {
        const model = await Itmes.findById(req.params.id)
        res.send(model)
    })
    router.put('/items/:id', async (req, res) => {
        const model = await Itmes.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/items/:id', async (req, res) => {
        await Itmes.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    app.use('/admin/api', router)
}