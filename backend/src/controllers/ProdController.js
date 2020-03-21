const Prod = require('../models/products');

module.exports ={
    async index(req,res){
        const {category} = req.headers;
        const prods = await Prod.find({
            category:category
        })
        return res.json(prods)
    },
    async store(req,res){
        const {product,desc,price,category} =req.body 

        const prod = await Prod.create({
            name:product,
            description:desc,
            price,
            category
        })

        return res.json(prod)
        
    }
}