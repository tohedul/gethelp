var express = require('express');
// var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(request, response){

		response.render('home');
	
});

module.exports = router;