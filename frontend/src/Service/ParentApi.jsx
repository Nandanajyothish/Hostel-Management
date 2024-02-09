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

// Service/ParentApi.js
export const getUserAttendanceList = async (RollNumber) => {
  try {
    const response = await ParentInstances.get(`/Userattendencelist/${RollNumber}`);
    console.log('Attendance Response:', response.data);
    return response.data; // This line should be inside the try block
  } catch (error) {
    console.error('Error fetching Attendance list:', error.message);
    throw error;
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
  
  export const getUser = async ()=>{
    return ParentInstances.get('/getuser')
  }

