var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.send('respond with a resource');
  	res.json({'code': 200, 'status': 'success', 'message': 'Ini Router User'});
});

module.exports = router;
