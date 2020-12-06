//Code on this page is modeled afer the in class demo and our zybooks chapter 11
var express = require('express');
var router = express.Router();
var rec1 = require("../controllers/recomendationsController.js")

router.post('/', rec1.create);// modeled from in class demo
router.get('/',rec1.findAll);// modeled from in class demo
router.delete('/',rec1.remove);// modeled from in class demo
router.put('/',rec1.update);// modeled from in class demo


/*router.post('/', function(req, res, next) {
   rec1.create(req, res);
   //res.status(200).redirect("/recomendations-page");
   res.send("test");
  });*/
  module.exports = router;