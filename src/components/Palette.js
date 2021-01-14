import React from "react";
import Card from "./Card";
import Color from "./Color";
import "./Palette.css";
import PaletteAttribute from "./PaletteAttribute";

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
        <PaletteAttribute name={"Author"} value={palette.userName} />
        <PaletteAttribute name={"Created"} value={palette.dateCreated} />
        <PaletteAttribute name={"Likes"} value={palette.numHearts} />
      </div>
    </Card>
  );
};

export default Palette;
