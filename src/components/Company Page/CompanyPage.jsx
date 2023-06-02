import React ,{useState,useEffect}from 'react';
import Info from './Info';
import Highlights from './Highlights';
import DealTerms from "./DealTerms"
import Docs from './Docs';
import Pitch from './Pitch';
import MeetTeam from './MeetTeam';
import classes from "./Info.module.css";
import axios from "axios";
import {useParams} from 'react-router-dom'

const CompanyPage = () => {

  let {id}=useParams();
  console.log(id)
  const [company,setCompany] = useState({})
  const getCompanyData = async() =>{
    if(id){
    const response = await axios.get(`http://localhost:5000/api/company/getcomp/${id}`)
    const data = await response.data;
    setCompany(data?.[0]);
    }
  }
  useEffect(()=> {
    getCompanyData();
  },[])
  return (
    <div className={classes.main}>
        <Info company={company}/>
        <Highlights />
        <DealTerms company={company}/>
        <Docs />
        <Pitch company={company}/>
        <MeetTeam company={company}/>
    </div>
  )
}

export default CompanyPage