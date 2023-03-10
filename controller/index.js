const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model/index.js');
const user = new User();
const product = new Product();
route.get("^/$|/Blossom Bee", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

// user router
route.post('/login', bodyParser.json(), (req, res)=> {
    user.login(req, res);
});
// retrieve all users
route.get('/users', (req, res)=> {
    user.fetchUsers(req, res);
});
// update
route.put('/user/:id',bodyParser.json(), (req,res)=> {
    user.updateUser(req,res);
});
// register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});
// delete
route.delete('/user/:id', (req, res)=> {
    user.deleteUser(req, res);
});

// Products
// all products
route.get('/products', (req,res)=> {
    product.fetchProducts(req, res);
})
// single product
route.get('/product/:id', (req, res)=> {
    product.fetchProduct(req, res);
})
// add new product
route.post('/product', bodyParser.json(), (req, res)=> {
    product.addProduct(req, res);
})
// update product
route.put('/product/:id', bodyParser.json(), (req, res)=> {
    product.updateProduct(req, res);
})
// delete product
route.delete('/product/:id', (req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;

