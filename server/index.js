const express = require('express'),
bodyParser = require('body-parser'),
pino = require('express-pino-logger')(),
mongoose = require('mongoose'),
cors = require('cors'),
path = require('path'),
config = require('./config/database'),
expressSanitizer = require('express-sanitizer'),
v1 = require('./routes/v1');

mongoose.connect(config.databasePath, {useNewUrlParser: true}, (err)=>{
  if(err){
      return console.log('Some problem with the connection ' +err);   
    } 
    console.log('The Mongoose connection is ready');  
});

// initialize express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// applying sanitizer
app.use(expressSanitizer());

// unblock other domains
app.use(cors());

//logger
app.use(pino);

// initial route
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/v1', v1);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);