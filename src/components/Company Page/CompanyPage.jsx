import React from 'react';
import Info from './Info';
import Highlights from './Highlights';
import DealTerms from "./DealTerms"
import Docs from './Docs';
import classes from "./Info.module.css";

const CompanyPage = () => {
  return (
    <div className={classes.main}>
        <Info />
        <Highlights />
        <DealTerms />
        <Docs />
    </div>
  )
}

export default CompanyPage