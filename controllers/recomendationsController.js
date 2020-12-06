//Code on this page is modeled afer the in class demo and our zybooks chapter 11
var mongoose= require("mongoose")
var Recomendation = require("../models/recomendation");// modeled from class demo
exports.create = (req, res) =>{
   console.log("create was called");
    var rec = new Recomendation({
        name:      req.body.name,
        recomendation: req.body.recomendation,
    });

    rec.save(function(err, recomendation) {// modeled from class demo and zybooks chatpr 11
        if (err) {
           res.status(400).send("there was a problem your recomendation could not be saved");
        } 
        else {
           res.send("your recomendation was saved");
           
        }
     });

}

exports.findAll=(req,res)=> {// modeled from class demo and zybooks chatpr 11
   Recomendation.find(function(err, recomendation){
      if(err){
         res.status(400).send("there was a problem your recomendation could not be saved");
      }
      else {
         res.send(recomendation);
         
      }


   });
}

exports.remove=(req,res)=> { 
   var recID = new mongoose.Schema ({_id: String});

   Recomendation.deleteOne(recID._id=req.body, function(err, recomendation){
      if(err){
         res.status(400).send("there was a problem your recomendation could not be deleted");
      }
      else {
         res.send("The Recomendation Has Been deleted");
         
      }
   });  
}

exports.update=(req,res)=>{
   var updateID =  {_id: req.body._id};
   var newRec= {recomendation: req.body.recomendation};
   Recomendation.findOneAndUpdate(updateID, newRec, {new:true},function(err, recomendation){
      console.log(req.body.recomendation);
      console.log(req.body._id);
      console.log(recomendation);
      if(err){
         res.status(400).send("there was a problem your recomendation could not be updated");
         
      }
      else {
         res.send("The Recomendation Was Updated");
         
      }

   })

}



