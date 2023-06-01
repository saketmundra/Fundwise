import React from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom";

import './userLogin.css'

function UserLogin() {

    let navigate = useNavigate(); 
    const usersignup = () =>{ 
    let path = `/invest`; 
    navigate(path);
  }

    return(
        <div>
            <form>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="walletID">Enter wallet address:</FormLabel>
                <TextField sx={{width:"40%", marginLeft:"31%"}} type="text" id="walletID" name="walletID" />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="upassword">Enter password:</FormLabel>
                <TextField sx={{width:"40%", marginLeft:"31%"}} type="password" id="upassword" name="upassword" />

                <Button sx={{display:"block", margin:"3% auto 2%", color:"#00df9a",padding:"0.5% 6%"}} type='submit'>Login</Button>

                <p className="alreadylogged">New User?</p>
                <Button onClick={usersignup} sx={{display:"inline", width:"20%", margin:"0.5% 40.7% 1%", color:"#00df9a",padding:"0.5% 6%"}}>Register Now</Button>
            </form>
        </div>
    )
}

export default UserLogin;