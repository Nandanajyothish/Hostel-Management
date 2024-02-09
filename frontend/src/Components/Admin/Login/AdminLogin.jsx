import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AdminLogin.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAdminDetails } from '../../../Features/setAdmin';
import { adminLogin } from '../../../Service/AdminApi';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object().shape({
   
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    
  });
  

const AdminLogin = () => {
   const dispatch =useDispatch();
   const navigate=useNavigate()

    const formik = useFormik({
        initialValues: {
          
          email: '',
          password: '',
          
        },
        validationSchema: validationSchema,
         onSubmit: async (adminData) => {
          try {
         const {data} = await adminLogin(adminData)

         console.log(data,'55555')
         if(data.status){
          dispatch(setAdminDetails(data.admin));
          localStorage.setItem('adminToken', data.token);
          navigate('/admin/userlist');
          toast.success(data.message);
         
         }else{
          toast.error(data.message)
         }
  

        }
        catch (error) {
          console.error('Error logging in:', error.message);
          
          toast.error('Error logging in');
      }
        },
      }); 
    return (
        <div>
             <div className='admin-page '>
    <div className='admin'>
        <div className='form-admin'>
  <form  onSubmit={formik.handleSubmit}>
    <h2> Admin Login</h2><br/>

    <label>Email</label>
    <input 
     type='email'
     name='email'
     placeholder='enter the email'
     value={formik.values.email}
      onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
              {formik.touched.email && formik.errors.email && <div className="error-message">{formik.errors.email}</div>}
     

    <label>Password</label>
    <input 
    type='password'
    name='password'
    placeholder='enter the password'
    value={formik.values.password}
    onChange={formik.handleChange}
                onBlur={formik.handleBlur}
    />
    {formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}
   
    <button>Login</button>
    
  </form>
  </div>
  </div>
</div>
<ToastContainer />
        </div>
    )
}

export default AdminLogin
