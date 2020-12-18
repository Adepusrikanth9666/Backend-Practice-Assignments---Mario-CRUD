const mongoose = require('mongoose');

//  Your code goes here

const marioModel = new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   weight:{
       type:String,
       required:true
   }

})

let marioModel = mongoose.model('mariochar',marioModel);


module.exports = marioModel;