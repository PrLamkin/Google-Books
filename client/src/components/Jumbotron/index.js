import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, marginTop:10, textAlign: "center", backgroundColor: "#EAE7DC" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;