import React,{useState,useEffect,useRef} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Contract, ethers, providers, utils } from "ethers";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import './auth.css'

function StartupSignup() {

    let navigate = useNavigate(); 
    const startuplogin = () =>{ 
    let path = `/raise`; 
    navigate(path);
  }
  const [loading,setLoading] = useState(false);
  const [userData,setUserData] = useState({
    companyName: "",
    companyEmail: "",
    linkedIn: "",
    founder: "",
    founderLn: "",
    pass: "",
    bio: "",
    category: "",
    valuation: "",
    minSub: "",
    target: "",
    targetdate: "",
    custBase: "",
    revenue: "",
    docs: "",
    vidlink: "",
    walletAddress: ""
  })


  const handleInput = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
        // console.log(userData)
	};


    const handleBtn = async(e) => {
        e.preventDefault();
        console.log(userData)
        const userD={
          legalName: userData.companyName,
          email: userData.companyEmail,
          linkedin: userData.linkedIn,
          founderName: userData.founder,
          founderLn: userData.founderLn,
          password: userData.pass,
          bio: userData.bio,
          category: userData.category,
          valuation: userData.valuation,
          minsubamt: userData.minSub,
          target: userData.target,
          targetDate: userData.targetdate,
          custBase: userData.custBase,
          revenue: userData.revenue,
          videoLink: userData.vidlink,
          assignedAddress:"demo",
          walletAddress: userData.walletAddress,
          documents: userData.docs,

        } 
        console.log(userD)
        setLoading(false);
      }

    return (
        <div className="mainstartupSignup">
            
            <p className="sualready">Already Registered?</p>      
            <Button onClick={startuplogin} sx={{display:"inline", width:"20%", margin:"0.5% auto 1%", color:"#00df9a"}}>Login</Button>

            <form>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="companyName" required>Company Name:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="text" name="companyName" placeholder="Your Company name" />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='companyEmail' required>Email ID:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='email' id='companyEmail' name='companyEmail' placeholder='Your Email Id' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='linkedIn' required>Company LinkedIn:</FormLabel> 
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='url' id='linkedIn' name='linkedIn' placeholder='Your LinkedIn' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='founder' required>Founder's Name:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='text' id='founder' name='founder' placeholder='Founder Name' />
                
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='founderLn' required>Founder's LinkedIn:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='text' id='founderLn' name='founderLn' placeholder='Founder LinkedIn' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='pass' required>Password:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='password' id='pass' name='pass' placeholder='Password' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='bio' required>Tell Us About your Company:</FormLabel>
                <textarea onChange={handleInput} className="bio" maxLength={250} id='bio' name='bio' placeholder='Company Bio' /> 

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="category" required>Which category does your company fall under?</FormLabel>
                <select onChange={handleInput} className="dropdown" name="category" id="category">
                    <option disabled selected value=""></option>
                    <option value="aerospace">Aerospace</option>
                    <option value="transport">Transport</option>
                    <option value="computer">Computer</option>
                    <option value="telecommunication">Telecommunication</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="construction">Construction</option>
                    <option value="education">Education</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="food">Food</option>
                    <option value="heathcare">Health Care</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="newsmedia">News Media</option>
                    <option value="energy">Energy</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="music">Music</option>
                    <option value="mining">Mining</option>
                    <option value="www">WorldWide Web</option>
                    <option value="electronics">Electronics</option>
                    
                </select>
                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="valuation" required>Company valuation:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='number' id='valuation' name='valuation' placeholder='Company Valuation' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="minSub" required>Minimum Subscription Amount:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="number" id='minSub' name='minSub' placeholder='Minimum Sub Amount' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="target" required>Target Amount:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='number' id='target' name='target' placeholder='Your Target Amount' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='targetdate' required>Target Date:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='date' placeholder='Target Date' id='targetdate' name='targetdate' />

               <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='custBase' required>Expected Customer Base:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='number' id='custBase' name='custBase' placeholder='Customer Base' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="revenue" required>Expected Revenue:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="number" id='revenue' name='revenue' placeholder='Revenue' />

                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="docs">Link of Relevant Documents:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='url' id='docs' name='docs' placeholder='Relevant Documents' />


                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor="walletAdd">Wallet Address</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type='text' id='walletAdd' name='walletAdd' placeholder='Wallet Address' disabled/>


                <FormLabel sx={{display:"block", fontSize: "1.3rem", margin:"3% auto 1% 31%"}} htmlFor='vidlink'>Video Link Explaining your startup:</FormLabel>
                <TextField onChange={handleInput} sx={{width:"40%", marginLeft:"31%"}} type="url" id='vidlink' name='vidlink' placeholder='Video Link' />

                <Button onClick={handleBtn} sx={{display:"block", margin:"3% auto 2%", color:"#00df9a",padding:"0.5% 6%"}} type='submit' >Register Now</Button>

            </form>
        </div>
    )
}

export default StartupSignup