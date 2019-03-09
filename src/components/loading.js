import React from "react";
import loading from "../img/loading.gif";

const Loading = props => {
  return (
    <div className="loading-window">
      <img src={loading} alt="loading icon" />
    </div>
  );
};
export default Loading;
