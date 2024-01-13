import React from "react";
import ReactPlayer from "react-player";

const StartPage = ({ actualLanguage }) => {
  console.log(actualLanguage);
  let url =
    actualLanguage === "PL"
      ? `${process.env.PUBLIC_URL}/movies/movie1.mp4`
      : `${process.env.PUBLIC_URL}/movies/movie2.mp4`;
  return (
    <div className="background-video">
      <ReactPlayer url={url} playing muted width="100%" height="100%" />
    </div>
  );
};

export default StartPage;
