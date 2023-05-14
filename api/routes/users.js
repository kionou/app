var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET users listing. */
router.get('/', function(req, res) {
  axios
  .get("https://simro-kberthe.pythonanywhere.com/api/liste-dernier-prix-marche/")
  .then(function (response) {
    console.log(response.data);
    res.json(response.data)
  });
});

module.exports = router;
