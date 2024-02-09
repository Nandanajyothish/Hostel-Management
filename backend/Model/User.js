const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const secretKey = process.env.SECRET_KEY
require('dotenv').config();



const userSchema = new Schema({

  username: { type: String,
     required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String,required:true },
  isBlocked: { type: Boolean, default: false },
  RollNumber:{type:Number,required:true},
  
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});


// userSchema.methods.generateAuthToken = function () {
//   const user = this;
//   const token = jwt.sign({ _id: user._id }, secretKey); 
//   user.tokens = user.tokens.concat(token);
//   user.save();

//   return token;
// };


const User = mongoose.model('User', userSchema);
module.exports = User;