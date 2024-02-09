
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  category:{
            type: String,
             required:true  },
   foodname:
           { type:String,
              required:true},
  
  time:{
         type:String,
        required:true} ,           
 
  
});




const Menu = mongoose.model('Menu',menuSchema );
module.exports =Menu;
