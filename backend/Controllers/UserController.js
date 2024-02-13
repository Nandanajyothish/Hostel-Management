
const User = require('../Model/User');
const Menu =require ('../Model/Menu');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const Notification=require('../Model/Notification')
const Payment =require('../Model/Payment')
const Attendance=require('../Model/Attendence')
const maxAge=3*24*60*60;
require('dotenv').config();

//jwt
const createToken =(id)=>{
  return jwt.sign({id},process.env.SECRET_KEY,{
    expiresIn:maxAge
  })
}


// const signUp = async (req, res) => {
//   try {
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//       phoneNumber: req.body.phone,
//       RollNumber:req.body.rollno,
//     });
//     await newUser.save();
//     const token=createToken(newUser._id);
    
//     console.log('User registered successfully:',newUser,token)
    
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
const signUp = async (req, res) => {
  try {
      const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phoneNumber: req.body.phone,
          RollNumber: req.body.rollno,
      });
      await newUser.save();
      const token = createToken(newUser._id);

      console.log('User registered successfully:', newUser, token)

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};


const userHeader=async(req,res)=>{
  try {
    const user=req.user;
    res.json({user:user,status:true})
  } catch (error) {
    res.json({message:'internal server error',status:false}) 
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body, '44444');
    const user = await User.findOne({ email: email });
    console.log(user, "@@@@");
    
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        console.log(auth);

        if (auth) {
            const token = createToken(user._id);
            res.json({ message: 'Login successful', status: true, token, user });
            return;  
        } else {
            res.json({ message: 'Password incorrect', status: false });
            return;  
        }
    } else {
        res.json({ message: 'User not found', status: false });
        return;  
    }
    
} catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
}
};
 
const getFoodMenu = async (req, res) => {
  try {
    const menulist = await Menu.find();
    res.json(menulist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getNotifications= async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPaymentList = async (req,res)=>{
  try {
    const fees = await Payment.find();
    res.status(200).json({ fees });
} catch (error) {
    console.error('Error fetching user list:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
}
}
const getAttendanceList = async (req, res) => {
  try {
      const attendance = await Attendance.find();
      res.status(200).json({ attendance });
  } catch (error) {
      console.error('Error fetching attendance list:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};




module.exports = { signUp, userLogin ,getFoodMenu,getNotifications,userHeader ,getPaymentList,getAttendanceList};
