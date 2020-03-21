const express = require('express')
const routes = require ('./routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://phd:phd@cluster0-s2asv.mongodb.net/modaweb?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333);