var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  axios
  .get("https://simro-kberthe.pythonanywhere.com/api/marche")
  .then(function (response) {
    console.log(response.data);
    res.json(response.data)
  });

});

module.exports = router;
