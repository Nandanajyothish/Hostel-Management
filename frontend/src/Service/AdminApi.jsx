
import { AdminInstances } from "../Axios/AdminInstance";



export const registerWarden =async(WardenData)=>{
  try{
    const response = await AdminInstances.post('/register', {...WardenData});

      console.log(response.data);
      return response.data
  }
  catch(error){
      console.error('Error signing up:',error.message);
      throw error
  }
};

export const getAdminUserList = async () => {
  try {
    const response = await AdminInstances.get('/userlist');
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const  adminLogin=(values)=>{
  console.log(values,"9999999999")
  return AdminInstances.post("/login",{...values})
}

export const adminHeader =()=>{
  return AdminInstances.get('/adminheader');
}