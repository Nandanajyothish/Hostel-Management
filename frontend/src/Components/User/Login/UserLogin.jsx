
import './Login.css'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userLogin } from '../../../Service/UserApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../../Features/setUser';





const validationSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email format').required('Email is required'),

  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
 
});


const UserLogin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      
      email: '',
      password: '',
      
    }, validationSchema: validationSchema,
    onSubmit: async (userData) => {
      try {
        
       const {data}= await userLogin(userData);
         console.log(data,']]]]]]');
         if(data.status){
          dispatch(setUserDetails(data.user));
          localStorage.setItem('userToken',data.token);
          navigate('/userhome')
          toast.success(data.message);
         }
        else{
          toast.error(data.message)
        }
       
      } catch (error) {
        console.error('Error logging in:', error.message);
        // toast.error('Error logging in');
      }
      
    },
  }); 

  return (
    <div>
     <div className='login-page '>
    <div className='login'>
        <div className='form'>
  <form  onSubmit={formik.handleSubmit}>
    <h2> Student Login</h2><br/>

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
    <p>Create Account <Link to="/userregister">Register</Link></p>
  </form>
  </div>
  </div>
</div>
<ToastContainer/>
    </div>
  )
}

export default UserLogin
