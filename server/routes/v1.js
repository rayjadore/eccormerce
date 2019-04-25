    const express = require('express'),
    router = express.Router(),
    user = require('../models/user'),
    product = require('../models/product'),
    order = require('../models/order');
    

    router.post('/login', (req,res)=>{
       
    });

    router.post('/register', (req,res)=>{

    });

    // middleware
    router.post('/auth', (req,res)=>{

    });

    // get a users profile
    router.get('/profile', (req,res)=>{

    });
    // get products based on brand
    router.get('/products', (req,res)=>{

    });


    //product details
    router.get('/products/:id', (req,res)=>{

    });


    //search


    module.exports = router;