const express = require('express');
const connectDB = require('./Config/dbConnection')

const parentRoutes = require('./Routes/ParentRoutes')
const adminRoutes =require('./Routes/AdminRoutes')
// const attendenceRoutes =require('./Routes/AttendenceRoutes')
const userRoutes = require('./Routes/UserRoutes')
const wardenRoutes =require('./Routes/WardenRoutes')
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())

connectDB();


app.use('/',userRoutes)
app.use('/admin',adminRoutes)
app.use('/warden',wardenRoutes)
app.use('/parent',parentRoutes)
// app.use('/attend',attendenceRoutes)



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});