var express = require('express');
var router = express.Router();

/* GET selection page. */
router.get('/', function(req, res, next) {
  res.render('selection/selection.html');
});

module.exports = router;

