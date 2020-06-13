import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div>
        <h1 className="appname white f1">Find Faces</h1>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signout")}
            className=" white f3 link dim black underline pa3 pointer "
          >
            Sign Out
          </p>
        </nav>
      </div>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className=" white f3 link dim black underline pa3 pointer "
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className=" white f3 link dim black underline pa3 pointer "
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
