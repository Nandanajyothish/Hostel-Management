import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Parentreg.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser, parentSignUp } from "../../../Service/ParentApi";


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name is required")
    .min(4, "Username must be at least 4 characters")
    .max(15, "Username cannot be more than 15 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10,11}$/, "Enter a valid phone number"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  rollno: Yup.number()
    .required("Roll Number is required")
    .positive("Roll Number must be positive")
    .integer("Roll Number must be an integer"),
    studentname: Yup.string()
    .required("Student Name is required")
    .min(4, "Student name must be at least 4 characters")
    .max(15, "Student name cannot be more than 15 characters"),
  })

const ParentRegister = () => {
  const [users,setUsers]=useState([])
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      selectedRollnos: [],
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values,{setSubmitting}) => {
      try {
        console.log('submitting form with values',values)
        await parentSignUp(values);
        console.log("Parent registered successfully");

        toast.success("Registration successful");
      } catch (error) {
        console.error("Error registering:", error.message);
        toast.error("Error registering");
      }
      finally{
        setSubmitting(false)
      }
    },
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUser();
        setUsers(response.data || []); // Assuming the API response contains user data
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <div>
        <div className="parent-page">
          <div className="parent-form">
            <div className="parent-register">
              <form onSubmit={formik.handleSubmit}>
                <div className="register-header">
                  <h1 className="hrr"> Parent Register</h1>
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

                {formik.touched.username && formik.errors.username && (
                  <div className="error-message">{formik.errors.username}</div>
                )}

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="enter the email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
                  {/* Student Roll Number */}
                  
      <select
        name="selectedRollnos" // Changed from 'rollno' to 'selectedRollnos'
        value={formik.values.selectedRollnos}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        multiple
      >
        <option value="" label="Select Student" />
        {users.map((user) => (
          <option key={user.RollNumber} value={user.RollNumber}>
            {user.username} - {user.RollNumber}
          </option>
        ))}
      </select><br/>

                <label>Contact No</label>
                <input
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  placeholder="enter your phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="error-message">{formik.errors.phone}</div>
                )}

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error-message">{formik.errors.password}</div>
                )}

                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  placeholder="Re-type the password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="error-message">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                <button className="btn-register" type="submit">
                  Register
                </button>
                <p>
                  Do you have an account? <Link to="/parent/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ParentRegister;
