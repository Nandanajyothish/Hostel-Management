import { ParentInstances } from "../Axios/ParentInstance";


export const parentSignUp =async(parentDate)=>{
    try{
        const response =await ParentInstances.post('/parentsignup', {...parentDate})
        console.log(response.data);
        return response.data
    }
    catch(error){
        console.error('Error signing up:',error.message);
        throw error
    }
};





export const  parentLogin=(values)=>{
    console.log(values,"//////")
    return ParentInstances.post("/login",{...values})
  }


  export const getNotifications = async () => {
    try {
      const response = await ParentInstances.get('/parentGetNotifications');
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  };


export const createPayment = (amount, parentName, studentName) => {
  return ParentInstances.post('/payment', { amount, parentName, studentName });
};

  
  export const parentHeader = () => {
    return ParentInstances.get('/parentheader');
  };
  
  export const getAttendanceList = async () => {
    try {
      const response = await ParentInstances.get('/attendanceList');
      return response.data;
    } catch (error) {
      console.error('Error fetching Attendance list:', error.message);
      throw error;
    }
  };
 

  export const searchAttendanceByRollNumber = async (rollNumber) => {
    try {
      const response = await ParentInstances.get(`/searchattendance/${rollNumber}`);
      return response.data;
    } catch (error) {
      console.error('Error searching attendance by roll number:', error.message);
      throw error;
    }
  };

  export const getpaymentList =()=>{
    return ParentInstances.get('/paymentList');
  }