import React from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';

import './userLogin.css'

function startupLogin() {
    return(
        <div>
            <form>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="walletID">Enter wallet address:</FormLabel>
                <TextField sx={{width:"40%", marginLeft:"31%"}} type="text" id="walletID" name="walletID" />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="upassword">Enter password:</FormLabel>
                <TextField sx={{width:"40%", marginLeft:"31%"}} type="password" id="upassword" name="upassword" />

                <p className="already">New User?</p>
                <Button sx={{display:"inline", width:"20%", margin:"0.5% 39% 1%", color:"#00df9a"}}>Sign In</Button>
            </form>
        </div>
    )
}

export default startupLogin;