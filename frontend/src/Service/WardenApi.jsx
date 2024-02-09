import { WardenInstances } from "../Axios/WardenInstances"

export const markAttendance = async (attendanceData) => {
    try {
      const response = await WardenInstances.post('/wardenmarkAttendance', attendanceData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error marking attendance:', error.message || error);
      throw error;
    }
  };

  export const  wardenLogin=(values)=>{
    console.log(values,"!!!!!!")
    return WardenInstances.post("/wardenlogin",{...values})
  }

 export const getFoodMenu = async () => {
  try {
    const response = await WardenInstances.get('/wardenGetFood');
    return response.data;
  } catch (error) {
    throw error;
  }
}

 export const addFoodItem = async (newFoodItem) => {
  try {
    const response = await WardenInstances.post('/wardenAddFood', newFoodItem);
    return response.data;
  } catch (error) {
    throw error;
  }
}





export const updateFoodItem = async (id, updatedFoodItem) => {
  try {
    const response = await WardenInstances.put(`/wardenUpdateFood/${id}`, updatedFoodItem);
    return response.data;
  } catch (error) {
    throw error;
  }
}



 export const deleteFoodItem= async (id) => {
  try {
    const response = await WardenInstances.delete(`/wardenDeleteFood/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export const getWardenUserList = async () => {
  try {
    const response = await WardenInstances.get('/wardenuserlist'); // Update the endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const blockUser = async(userId)=>{
  try {
   await WardenInstances.put(`/wardenblock/${userId}`)
  } catch (error) {
    throw error;
  }
}

export const unblockUser = async(userId)=>{
  try {
   await WardenInstances.put(`/wardenunblock/${userId}`)
  } catch (error) {
    throw error;
  }
}


export const createNotification= async (notificationData) => {
  try {
    const response = await WardenInstances.post('/wardenNotifications', notificationData);
    return response.data;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

export const getNotifications=async () => {
  try {
    const response = await WardenInstances.get('/wardenGetnotifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
export const deleteNotification = async (id) => {
  try {
    const response = await WardenInstances.delete(`/deleteNotifications/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const wardenHeader = () => {
  return WardenInstances.get('/wardenheader');
};
export const getpaymentList =()=>{
  return WardenInstances.get('/paymentList');
}