var axios = require('axios').default;
var express = require('express');
var router = express.Router();
router.get('/', function(req,res,next){
  var search = "";
  if(req.query.searchFilter.localeCompare("zip-code")==0){
    search=search+"by_postal="+req.query.input;
    console.log(search);
    console.log(req.query.input);
  }
  if(req.query.searchFilter.localeCompare("city-name")==0){
    search=search+"by_city="+req.query.input;
    console.log(search);
    console.log(req.query.input);
  } 
  if(!req.query.brewType.localeCompare("any")==0){
    search=search+"&by_type="+req.query.brewType;
    console.log(search);
  }
  axios.get('https://api.openbrewerydb.org/breweries?'+search).then(function(response){
      res.send(response.data);
  });
  search = "";
});
module.exports = router;