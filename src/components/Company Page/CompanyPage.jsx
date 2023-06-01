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

  let tempId=useParams();
  const [id,setId]=useState(tempId.id)
  const [company,setCompany] = useState({})
  useEffect(()=> {
    console.log(id)
    axios.get(`http://localhost:5000/api/company/getcomp/:${id}`)
    .then(function(response) {
      setCompany(response.data)
    })
  },[])
  return (
    <div className={classes.main}>
        <Info company={company}/>
        <Highlights />
        <DealTerms />
        <Docs />
        <Pitch />
        <MeetTeam />
    </div>
  )
}

export default CompanyPage