import React from "react";
import Card from "./Card";
import Color from "./Color";
import "./Palette.css";

const Palette = (props) => {
  const palette = props.value;
  return (
    <Card>
      <div className="palette-title">{palette.title}</div>
      <div className="colors-container">
        {palette.colors.map((color) => {
          return <Color key={color} value={color} />;
        })}
      </div>
      <div className="palette-details">
        <div className="palette-attribute">{palette.userName}</div>
        <div className="palette-attribute">{palette.dateCreated}</div>
        <div className="palette-attribute">{palette.numHearts}</div>
      </div>
    </Card>
  );
};

export default Palette;
