//Declaration
var express= require('express');
var bodyParser= require('body-parser');
var home=require('./controllers/home');
var login=require('./controllers/login');
var app=express();

//Configuration
app.set('view engine', 'ejs');


//Middleware

app.use(bodyParser.urlencoded({extended:false}));

//Routing 
app.use('/home', home);
app.use('/login', login);
app.get('/', home);  //call/view landing page

//SERVER STARTUP

app.listen(3000, function(){

	console.log('Server started successfully....');
});

