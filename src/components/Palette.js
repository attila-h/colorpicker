import React from "react";

const Palette = (props) => {
  const palette = props.value;
  return (
    <div>
      <div>
        {palette.colors.map((color) => {
          return <div key={color}>{color}</div>;
        })}
      </div>
      <div>{palette.title}</div>
      <div>{palette.userName}</div>
      <div>{palette.dateCreated}</div>
      <div>{palette.numHearts}</div>
    </div>
  );
};

export default Palette;
