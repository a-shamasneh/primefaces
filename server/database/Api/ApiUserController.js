var User=require('./ApiUserModel.js');
var jwt = require('jwt-simple');
module.exports = {
  signin: function (req, res) {
  	console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        console.log(data)
        if(data.length==0){
          res.json("username wrong")
        }
        else{
          User.find({password:password},function(err,data){


            if(err){
              res.json(err)
            }else{
              if(data.length==0){
                res.json("password wrong");
              }
              console.log(data)
               var token=jwt.encode(data[0],'user');
               res.json({token:token, id:data[0]._id})
            }

          })
        }
        
      }
    })
  }

};