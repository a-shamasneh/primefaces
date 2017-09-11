var mongo = require('mongoose')

var Api= new mongo.Schema({
   username:String,
   password:String,
})
var api = mongo.model('Api',Api)
module.exports=api