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
      <div>{palette.userName}</div>
      <div>{palette.dateCreated}</div>
      <div>{palette.numHearts}</div>
    </Card>
  );
};

export default Palette;
