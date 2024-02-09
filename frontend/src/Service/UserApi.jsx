
import { UserInstances } from "../Axios/UserInstace";


export const userSignUp =async(values)=>{
    try{
        const response =await UserInstances.post('/signup', {...values})
        console.log(response.data);
        return response.data
    }
    catch(error){
        console.error('Error signing up:',error.message);
        throw error
    }
};

export const  userLogin=(values)=>{
  console.log(values,"//////")
  return UserInstances.post("/login",{...values})
}

export  const getFoodMenu = async () => {
  try {
    const response = await UserInstances.get('/userGetFood')
     return response.data ;
    
    
  } catch (error) {
    throw error;
  }
};
export const getNotifications = async () => {
  try {
    const response = await UserInstances.get('/userGetNotifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

export const getAttendanceList = async () => {
  try {
    const response = await UserInstances.get('/attendanceList');
    return response.data;
  } catch (error) {
    console.error('Error fetching Attendance list:', error.message);
    throw error;
  }
};


export const userHeader = () => {
  return UserInstances.get('/userheader');
};

 
export const getpaymentList =()=>{
  return UserInstances.get('/feelist');
}
