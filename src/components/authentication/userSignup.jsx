import React,{useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import './auth.css'


function UserSignupForm() {
  
  let navigate = useNavigate(); 
  const userlogin = () =>{ 
    let path = `/invest`; 
    navigate(path);
  }

  const [userData,setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    panNumber: "",
    aadhar: "",
    userpassword: ""
  })

  const handleInput = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData)
	};

const handleBtn = (e) => {
  e.preventDefault();
  const userD={
    email: userData.email,
    name: userData.name,
    phoneno: userData.phoneNumber,
    panno: userData.panNumber,
    adhno: userData.aadhar,
    password: userData.userpassword
  } 
  axios.post('https://finback.onrender.com/api/users/signup', userD)
  .then(response => console.log(response.status))
  .then(navigate('/invest'));
}


  return (
    
    <div className="outerMainuserSignup">
      
    <p className="already">Already Registered?</p>
    <Button onClick={userlogin} sx={{display:"inline", width:"20%", margin:"0.5% auto 1%", color:"#00df9a"}}>Login</Button>
    
    <form>
      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="name" required>Your Name:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="name" type="text" name="name" placeholder="Your Name" />
      

      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="email" required>Email id:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="email" type="email" name="email" placeholder="Your Email id" />

      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="phoneNumber" required>Phone Number:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="phoneNumber" type="number" name="phoneNumber" placeholder="Your Phone Number" />

      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="panNumber" required>PAN Number:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="panNumber" type="text" name="panNumber" placeholder="Your PAN Number" />

      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="aadhar" required>Aadhar Card Number:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="aadhar" type="number" name="aadhar" placeholder="Your Aadhar Card Number" />
      
      <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="userpassword" required>Password:</FormLabel>
      <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} id="userpassword" type="password" name="userpassword" placeholder="Your Password" />
      
      <Button onClick={handleBtn} sx={{display:"block", margin:"3% auto 2%", color:"#00df9a",padding:"0.5% 6%"}} type="submit">Register Now</Button>
    </form>
    </div>
  )
}

export default UserSignupForm