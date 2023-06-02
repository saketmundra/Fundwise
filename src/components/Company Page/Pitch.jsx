import React from 'react';
import ReactPlayer from "react-player";
import classes from "./Info.module.css";

const Pitch = ({company}) => {
  return (
    <div className={classes.pitch}>
    <h2 className={classes.pitchHead}>Pitch</h2>
    <div className={classes.player}>

      <ReactPlayer
        url= {company.videoLink || "https://www.youtube.com/watch?v=ug50zmP9I7s"}
      />
    </div>
    </div>
  )
}

export default Pitch