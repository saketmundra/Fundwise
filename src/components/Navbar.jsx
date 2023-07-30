import React, {useState} from 'react'
// import { AuthContext } from '../store/AuthContext'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useDispatch} from "react-redux";
import { changeState } from '../store/loginslice';
import { useNavigate } from "react-router-dom";

const Navbar = ({loggedIn}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const handleLogout=()=>{
        localStorage.removeItem("access_token");
        dispatch(changeState());
        navigate('./')
    }

  return (
    <div className='flex justify-between items-center h-24  mx-auto px-4 text-white bg-black border-none shadow-md '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]' style={{cursor:"pointer"}} onClick={()=>{loggedIn?navigate('./companies'):navigate('./')}}>fundwise</h1>
        <ul className='hidden md:flex'>
            {!loggedIn?
            <>
            <li className='p-4'><a href='./invest'>Invest</a></li>
            <li className='p-4'><a href='./raise'>Raise</a></li>
            <li className='p-4'><a href='./about'>About</a></li>
            </>:''}
            {loggedIn?<>
                <li className='p-4' style={{cursor:"pointer"}} onClick={()=>navigate("/companies")}>Companies</li>
                <li className='p-4' style={{cursor:"pointer"}} onClick={()=>navigate('/holdings')}>Holdings</li>
                <li className='p-4' style={{cursor:"pointer"}} onClick={handleLogout}>Logout</li>
                </>:''}
            
        </ul>
    </div>
  )
}

export default Navbar