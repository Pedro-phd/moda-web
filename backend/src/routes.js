const express = require('express');
const routes = express.Router();

const ProdController = require('./controllers/ProdController')

routes.get('/', (req,res)=>{
    return res.json({ok:true})
})

routes.get('/prod', ProdController.index)
routes.post('/prod', ProdController.store)

module.exports = routes;