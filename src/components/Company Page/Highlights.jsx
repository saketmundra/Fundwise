import React from "react";
import InfoCard from "./InfoCard";
import classes from "./Info.module.css";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";

const Highlights = () => {
  const info =
    "5 million customers served till date, with high retention rates of 8-10%";

  return (
    <div className={classes.highlight}>
      <h2 className={classes.heading}>Highlights</h2>
      <div className={classes.cardContainer}>
        <InfoCard info={info} img={image1} />
        <InfoCard info={info} img={image2} />
        <InfoCard info={info} img={image3} />
        <InfoCard info={info} img={image4} />
      </div>
    </div>
  );
};

export default Highlights;
