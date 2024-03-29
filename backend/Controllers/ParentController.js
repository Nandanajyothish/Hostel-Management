const Parent = require('../Model/Parent');
const jwt=require('jsonwebtoken')
const Notification=require('../Model/Notification')
const maxAge=3*24*60*60;
const bcrypt = require('bcrypt');
const Razorpay=require('razorpay')
const Payment=require('../Model/Payment')
const Attendance=require('../Model/Attendence')
const User =require('../Model/User')

require('dotenv').config();


// jwt
const createParentToken = (id) => {
  return jwt.sign({ id }, process.env.PARENT_SECRET_KEY, {
    expiresIn: maxAge,
  });
};


const parentsignUp = async (req, res) => {
    try {
      const newParent = new Parent({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phone,
        
        
      });
      await newParent.save();
      const token=createParentToken(newParent._id);
      console.log('Parent Register Successfull',newParent,token);
      
      res.status(201).json({ message: 'parent registered successfully' });
    } catch (error) {
      console.error('Error registering parent:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const parentLogin= async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body, '|||||');
      
      const parent = await Parent.findOne({ email:email });
      console.log(parent,'####');

      if (parent) {
        const auth =await bcrypt.compare(password, parent.password)
        console.log(auth);

        
      if(auth){
        const token = createParentToken(parent._id)
        res.json({message: 'Login successfull', status:true ,token , parent});
        return
      }else{
        res.json({message: 'password incorrect', status:false});
        return;
      }
    }else{
      res.json({message:'Parent not found', status:false});
    }
    } catch (error) {
      console.error('Error logging in:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const parentHeader=async(req,res)=>{
    try {
      const parent=req.parent;
      res.json({parent:parent,status:true})
    } catch (error) {
      res.json({message:'internal server error',status:false}) 
    }
  }
  
  const getNotifications= async (req, res) => {
    try {
      const notifications = await Notification.find().sort({ createdAt: -1 });
      res.status(200).json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
  
  
const createPayment = async (req, res) => {
  try {
    const { amount, parentName, studentName } = req.body;

    
    if (isNaN(amount) || amount <= 0 || !parentName || !studentName) {
      console.error('Invalid amount, parentName, or studentName');
      return res.status(400).json({ error: 'Invalid amount, parentName, or studentName' });
    }

    const payment_capture = 1;
    const currency = 'INR';
    const order_id = Date.now().toString();

    const orderOptions = {
      amount: amount * 100, 
      currency,
      payment_capture,
      receipt: 'order_' + order_id,
    };

    console.log('Order Options:', orderOptions);

    const response = await razorpay.orders.create(orderOptions);

    console.log('Razorpay Response:', response);

    if (response.error) {
      console.error('Razorpay Error:', response.error);
      return res.status(500).json({ error: 'Razorpay Error' });
    }

    const newPayment = new Payment({
      orderId: response.id,
      paymentId: response.id,
      amount: amount,
      parentName: parentName,
      studentName: studentName,
    });

    await newPayment.save();
    res.json(response);
  } catch (error) {
    console.error('Error in createPayment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};







const getAttendanceList = async (req, res) => {
  try {
      const attendance = await Attendance.find();
      res.status(200).json({ attendance });
  } catch (error) {
      console.error('Error fetching attendance list:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getAttendanceByRollNumber = async (req, res) => {
  try {
    const { rollNumber } = req.params;
    console.log('Searching for attendance with RollNumber:', rollNumber);

    const attendance = await Attendance.find({ RollNumber: rollNumber });
    console.log('Attendance found:', attendance);

    res.status(200).json({ attendance });
  } catch (error) {
    console.error('Error fetching attendance by roll number:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
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

 
module.exports={
    parentsignUp,parentLogin , getNotifications, parentHeader,
    createPayment,getAttendanceList,getAttendanceByRollNumber,getPaymentList
}