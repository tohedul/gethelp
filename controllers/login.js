var express = require('express');
var mysql	= require('mysql')
var router = express.Router();

router.get('/', function(request, response){
	response.render('login');
});
/*

router.post('/', function(request, response){

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'node'
	});

	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	 
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "SELECT * FROM user where username='"+request.body.username+"' AND password='"+request.body.password+"'";

	connection.query(sql, function (error, results) {
	  if(error){
	  	console.log(error.stack);
	  }else{
	  	
	  	if(results.length >0){
	  		response.redirect('/home');
	  	}else{
	  		response.redirect('/login');
	  	}
	  }

	});

	/*if(request.body.username == request.body.password){
		//request.session.un = request.body.username; 
		//response.redirect('/home');		
	}else{
		response.send('Invalid user!');
	}
	

});*/

module.exports = router;