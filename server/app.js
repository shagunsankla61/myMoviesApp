let express = require('express');
let http= require ('http');
let bodyParser= require ('body-parser');
let mongoose =require ('mongoose');
let logger =require ('morgan');
let path =require ('path');
let fs =require ('fs');
let index =require ('./routes/index');
let insert =require ('./routes/insert');
let remove =require ('./routes/remove');
let update =require ('./routes/update');

let userdetail=require('./routes/userdetail');
let getdetail=require('./routes/getdetail');
let cors =require ('cors');

let app = express()
app.use(cors());
/* port listen and host creation */
const port = 3009;
http.createServer(app).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:/'+port);
app.use(logger('dev'));
//setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//providing routes to handle request
app.use('/',index);
app.use('/',insert);
app.use('/',update);
app.use('/',remove);
app.use('/',userdetail);
app.use('/',getdetail);



// create a write stream (in append mode) 
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
 
// setup the logger 
app.use(logger('combined', {stream: accessLogStream}))

/* mongoose db connection */
const db = 'mongodb://localhost/moviedb';
mongoose.connect(db,{useMongoClient: true});

module.exports = app;
