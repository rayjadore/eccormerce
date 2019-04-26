    const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    multer = require('multer'),
    User = require('../models/user'),
    config = require('../config/database'),
    Product = require('../models/product'),
    Order = require('../models/order');
    
    const clean = (value,res,req) => {
        if(typeof value !== 'string'){
            value='';
            return;
        }
        value = req.sanitize(value);
        return value;
    }
    const generateToken = (user)=> {
        const token = jwt.sign({name: `${user.firstname} ${user.lastname}, id: ${user._id}`}, config.secret,{expiresIn:1209600});
        return token;
    }

    router.post('/register', (req,res)=>{
        const user = new User({
            city: clean(req.body.city,res,req),
            country: clean(req.body.country, res,req),
            email: clean(req.body.email,res,req),
            firstname: clean(req.body.firstname,res,req),
            phone: clean(req.body.phone,res,req),
            password: bcrypt.hashSync(clean(req.body.password,res,req), bcrypt.genSaltSync(10)),
            lastname: clean(req.body.lastname,res,req),
            state: clean(req.body.state,res,req),
            userIp: clean(req.body.userIp,res,req),
            zip: clean(req.body.zip,res,req),
            address: clean(req.body.address,res,req)
        });
  

        user.save((err)=>{
            if (err) {
                return res.status(500).send({ message: "user was not successfully created", success: false });
            }
            return res.json({ message: `user ${req.body.firstname} ${req.body.lastname} was successfully created`, success: true });
        })
    });

    router.post('/login', (req,res)=>{
       const email = clean(req.body.email,res,req),
            password = clean(req.body.password,res,req);

            User.findOne({ email: email, password: password}, (err, user)=> {
                if (err) {
                    return res.status(500).send({ message: err, success: false })
                }
                if(!user) {
                    return res.status(500).send({ message: "Login was unsuccessfully, Please Try Again!!!", success: false })   
                }
                // compare password
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    return res.status(403).send({ message: "invalid password", success: false });
                }
                // create token
                const token = generateToken(user);
                return res.json({ success:true, user: user , token });
            }); 
    });

    // middleware
    router.post('/auth', (req,res, next)=>{
        const token = req.body.token || req.params.token || req.headers['x-access-token'];
        if (token){
            jwt.verify(token, config.secret, (err,decoded)=>{
                if (err) {
                    return res.status.send({ message: "invalid token", success: false });
                }
                req.decoded = decoded;
                next();
            })
        } else {
            return res.status(404).send({ message: "please provide a token", success: false });
        }
        
    });

    // get a users' profile
    router.get('/profile', (req,res)=>{
        return res.json({message: 'profile page'});
    });

    //upload one or more products
    router.post('/product', ()=>{
        // upload the image of the product
        // save the product to DB 
 
        // SET STORAGE
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
            cb(null, 'uploads')
            },
            filename: function (req, file, cb) {
            cb(null, file.name + '-' + Date.now())
            }
        });
   
        const upload = multer({ storage: storage })

    });

    // get products based on brand
    router.get('/products', (req,res)=>{
        Product.find().limit(20).exec((err,products) => {
            if (err) {
                return res.status(500).send({ message: err, success: false });
            }
            return res.json({ products, success: true });
        });
    });


    //product details
    router.get('/products/:id', (req,res)=>{
        const id = clean(req.params.id,res,req);
        console.log('id', id);
        Product.findOne({id:id}, (err, product)=> {
            if (err) {
                return res.status(500).send({ success: false, message: `unable to find product ${err}` });
            }
            return res.json({ success:true, product });
        });
    });


    //search


    module.exports = router;