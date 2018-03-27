var express = require('express');
var router = express.Router();

//attache /data/server.js

var data= require('../data/server.js');

/* GET home page. */
router.get('/', function(req, res,next) {
  var resfrom = data.readData(req,res,next);
  console.log("res data:"+resfrom);
  res.render('index', { title:'heheh',cloudantdata: resfrom});
  res.end();
});

module.exports = router;
