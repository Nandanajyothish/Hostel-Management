import React, { useEffect, useState } from 'react';
import { getWardenUserList ,blockUser ,unblockUser } from '../../Service/WardenApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './viewuser.css'


const ViewUser = () => {
    const [userList, setUserList] = useState([]);

  
  const fetchUserList = async () => {
    try {
      const wardenToken = localStorage.getItem('wardenToken');
      console.log('Warden Token:',wardenToken);
      if(wardenToken){
        const response =await getWardenUserList(wardenToken);
      if(response && response.users){
        const users = response.users || [];
        setUserList(users);
      }else{
        console.error('User List not available',response);
      }
      }else{
        console.error('Warden Token not found')
      }
     
    } catch (error) {
      console.error('Error fetching user list:', error.message);
    }
  };

  useEffect(() => {
    
    fetchUserList();
  }, []);

  const handleBlockUser = async (userId) => {
    try {
      await blockUser(userId);

      fetchUserList();
      toast.success('User blocked successfully');
    } catch (error) {
      console.error('Error blocking user:', error.message);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      await unblockUser(userId);
      
      fetchUserList();
      toast.success('User unblocked successfully');
    } catch (error) {
      console.error('Error unblocking user:', error.message);
    }
  }
     
  return (
    <div >
       <h2>Student List</h2>
     
     <table border={1} className='manage' width={500}>
       <thead>
         <tr>
           <th>Email</th>
           <th>Username</th>
           <th>phone</th>
           <th>Action</th>
          
         </tr>
       </thead>
       <tbody>
         {userList.map(user => (
           <tr key={user._id}>
             <td>{user.email}</td>
             <td>{user.username}</td>
             <td>{user.phoneNumber}</td>
             <td>
               <button  onClick={() => handleBlockUser(user._id)} disabled={user.isBlocked} className='user-block'>
                 Block
               </button>
               <button   onClick={() => handleUnblockUser(user._id)} disabled={!user.isBlocked} className='user-unblock'>
                 Unblock
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
     <ToastContainer/>
    </div>
  );
}

export default ViewUser;
