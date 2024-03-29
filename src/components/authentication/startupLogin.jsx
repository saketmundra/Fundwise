import React,{useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom";

import axios from "axios";

import './auth.css'

function StartupLogin() {

    let navigate = useNavigate(); 
    const startupsignup = () =>{ 
    let path = `/startupSignup`; 
    navigate(path);
  }

  const [userData,setUserData] = useState({
    suemail: "",
    supassword: ""
  })

  const handleInput = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
        // console.log(userData)
	};

    const handleBtn = async (e) => {
        e.preventDefault();
        const userD={
          email: userData.suemail,
          password: userData.supassword
        } 
        const res= await axios.post('https://finback.onrender.com/api/company/signin', userD);
        console.log(res);
      }

    return(
        <div>
            <form>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="suemail">Enter email address:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="email" id="suemail" name="suemail" />
                
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="supassword">Enter password:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="password" id="supassword" name="supassword" />

                <Button onClick={handleBtn} sx={{display:"block", margin:"3% auto 2%", color:"#00df9a",padding:"0.5% 6%"}} type='submit'>Login</Button> 

                <p className="alreadylogged">New User?</p>
                <Button onClick={startupsignup} sx={{display:"inline", width:"20%", margin:"0.5% 40.7% 3%", color:"#00df9a",padding:"0.5% 6%"}}>Register Now</Button>
            </form>
        </div>
    )
}

export default StartupLogin;