//Code on this page is modeled afer the in class demo and our zybooks chapter 11
var db = require("../db");

var Recomendation = db.model("Recomendation", {// modeled from zybooks
    name:      String,
    recomendation: String,
});

module.exports = Recomendation;


