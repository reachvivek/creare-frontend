import React from "react";
import classes from "./Background.scss";

const Background = () => {
  const videoSource = "/assets/cover.mp4";
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
