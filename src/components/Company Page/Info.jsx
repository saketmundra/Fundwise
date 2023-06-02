import React from "react";
import classes from "./Info.module.css";

const Info = ({company}) => {
  console.log(company)
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <img
          className={classes.logo}
          src="https://tyke-startup-bucket.s3.ap-south-1.amazonaws.com/Accelerate%20Productx%20Ventures%20Pvt%20Ltd/1618042284835.jpeg"
          alt="logo"
        />
        <h2 className={classes.head}>{company?.legalName || "Hi"}</h2>
      </div>
      <p>{company?.bio || "The New Shop is India's largest omnichannel convenience retailer with instant hyperlocal deliveries solving for quick, standardized and 24x7 access in India."}</p>
    </div>
  );
};

export default Info;
