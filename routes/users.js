var express = require('express');
var router = express.Router();

// Login page - Get Request
router.get('login', function(req, res){
    res.send('LOGIN');
});

// Register page -  Get 
router.get('register', function(req, res){
    res.send('REGISTER');
});
 
module.exports = router;