import React from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Addwarden.css';
import { registerWarden } from '../../../Service/AdminApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required').min(4, 'Username must be at least 4 characters').max(15, 'Username cannot be more than 15 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\d{10,11}$/, 'Enter a valid phone number'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

const AddWarden = () => {
    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (WardenData) => {
          try {
            await registerWarden(WardenData);
            console.log('warden registered successfully');
    
            
            toast.success('Registration successfull');
          } catch (error) {
            console.error('Error registering:', error.message);
            toast.error('Error registering');
          }
        },
      });
     
    return (
        <div>
            <div >
      <div className="warden-page">
        <div className="form-warden">
          <div className="warden-register">
            <form onSubmit={formik.handleSubmit}>
              <div className="Wregister-header">
                <h1 className='Whrr'>Register Warden</h1>
                <br />
              </div>
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                placeholder="enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.username && formik.errors.username && <div className="error-message">{formik.errors.username}</div>}

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="enter the email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && <div className="error-message">{formik.errors.email}</div>}

              <label>Contact No</label>
              <input
                type="text"
                name="phone"
                value={formik.values.phone}
                placeholder="enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && <div className="error-message">{formik.errors.phone}</div>}

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                placeholder="Re-type the password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="error-message">{formik.errors.confirmPassword}</div>
              )}
              <button className="btn-register" type="submit">
                Register
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    
        </div>
    )
}

export default AddWarden
