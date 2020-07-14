import React from "react";

let Preloader = (props) => {
  return (
    <div className="spinnerContainer">
      <img
        className={props.isFetching ? "spinner active" : "spinner disabled"}
        src="../assets/images/dv.png"
        alt=""
      />
    </div>
  );
};

export default Preloader;
