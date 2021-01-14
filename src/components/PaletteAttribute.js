import React from "react";
import "./PaletteAttribute.css";

const PaletteAttribute = (props) => {
  return (
    <div className="palette-attribute">
      <div className="palette-attribute-name">{props.name}</div>
      <div className="palette-attribute-value">{props.value}</div>
    </div>
  );
};

export default PaletteAttribute;
