import React from 'react';
import Info from './Info';
import Highlights from './Highlights';
import DealTerms from "./DealTerms"
import Docs from './Docs';
import Pitch from './Pitch';
import MeetTeam from './MeetTeam';
import classes from "./Info.module.css";

const CompanyPage = () => {
  return (
    <div className={classes.main}>
        <Info />
        <Highlights />
        <DealTerms />
        <Docs />
        <Pitch />
        <MeetTeam />
    </div>
  )
}

export default CompanyPage