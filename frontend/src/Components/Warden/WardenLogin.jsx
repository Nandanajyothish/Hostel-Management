import './Wardenlogin.css'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wardenLogin } from '../../Service/WardenApi';
import { useDispatch } from 'react-redux';
import { setWardenDetails } from '../../Features/setWarden';
import { useNavigate } from 'react-router-dom';





const validationSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email format').required('Email is required'),

  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
 
});


const WardenLogin = () => {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  
  const formik = useFormik({
    initialValues: {
      
      email: '',
      password: '',
      
    }, validationSchema: validationSchema,
    onSubmit: async (WardenData) => {
      try {
        const {data}= await wardenLogin(WardenData);
        console.log(data,'00000');
        if(data.status){
          dispatch(setWardenDetails(data.warden));
          localStorage.setItem('wardenToken',data.token)
          navigate('/warden/userlist')
          toast.success(data.message);
        }
        else{
          toast.error(data.message)
        }
        
         
        
        
      } catch (error) {
        console.error('Error logging in:', error.message);
        toast.error('Error logging in');
      }
      
    },
  }); 

      
  
    
       
  return (
    <div>
     <div className='w-page '>
    <div className='w-login'>
        <div className='form-w'>
  <form  onSubmit={formik.handleSubmit}>
    <h2>Warden Login</h2><br/>

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
<ToastContainer/>
    </div>
  )
}

export default WardenLogin
