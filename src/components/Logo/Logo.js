import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 grow"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={face} />
        </div>
      </Tilt>
      <div>
        <p className="white f3">
          "Welcome To Find Faces , Post an URL of a Pic To Find The Face
          (single) In It. "
        </p>
      </div>
    </div>
  );
};

export default Logo;
