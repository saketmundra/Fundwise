import React,{useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import './userLogin.css'

function UserLogin() {

    let navigate = useNavigate(); 
    const usersignup = () =>{ 
    let path = `/userSignup`; 
    navigate(path);
  }

  const [userData,setUserData] = useState({
    emailid: "",
    upassword: ""
  })

  const handleInput = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData)
	};


    const handleBtn = (e) => {
        e.preventDefault();
        console.log(userData)
        const userD={
          email: userData.emailid,
          password: userData.upassword
        }
        
        axios.post('http://localhost:5000/api/users/signin', userD)
        .then(response => localStorage.setItem("access_token",response.data));
      }

    return(
        <div>
            <form>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="emailid">Enter email address:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="text" id="emailid" name="emailid" />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="upassword">Enter password:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="password" id="upassword" name="upassword" />

                <Button onClick={handleBtn} sx={{display:"block", margin:"3% auto 2%", color:"#00df9a",padding:"0.5% 6%"}} type='submit'>Login</Button>

                <p className="alreadylogged">New User?</p>
                <Button onClick={usersignup} sx={{display:"inline", width:"20%", margin:"0.5% 40.7% 3%", color:"#00df9a",padding:"0.5% 6%"}}>Register Now</Button>
            </form>
        </div>
    )
}

export default UserLogin;