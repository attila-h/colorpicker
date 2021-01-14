import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Palettes = () => {
  const PALETTES_PER_PAGE = 10;
  const [palettes, setPalettes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const scrollTrigger = useRef();
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    if (isLoading) return;
    setOffset((actualOffset) => actualOffset + PALETTES_PER_PAGE);
  });

  useEffect(() => {
    const observedDiv = scrollTrigger.current;
    intersectionObserver.observe(observedDiv);
    return () => intersectionObserver.disconnect(observedDiv);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://my-cors-proxy.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json&numResults=${PALETTES_PER_PAGE}&resultOffset=${offset}`
      )
      .then((result) => {
        setPalettes((prevPalettes) => [...prevPalettes, ...result.data]);
        console.log(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error while retrieving new palettes");
        setIsLoading(false);
      });
  }, [offset]);

  return (
    <React.Fragment>
      <div>
        {palettes.map((palette) => {
          return <div key={palette.id}>{palette.title}</div>;
        })}
      </div>
      <div className="scrollTrigger" ref={scrollTrigger}></div>
    </React.Fragment>
  );
};

export default Palettes;
