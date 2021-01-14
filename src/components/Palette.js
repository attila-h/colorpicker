import React from "react";
import Card from "./Card";

const Palette = (props) => {
  const palette = props.value;
  return (
    <Card>
      <div>
        {palette.colors.map((color) => {
          return <div key={color}>{color}</div>;
        })}
      </div>
      <div>{palette.title}</div>
      <div>{palette.userName}</div>
      <div>{palette.dateCreated}</div>
      <div>{palette.numHearts}</div>
    </Card>
  );
};

export default Palette;
