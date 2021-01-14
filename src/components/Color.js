import React from "react";

function Color(props) {
  const color = "#" + props.value;
  const style = {
    backgroundColor: color,
    width: "100%",
    height: "35px",
  };

  return <div style={style} className="color" />;
}

export default Color;
