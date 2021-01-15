import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "./Loader";
import Palette from "./Palette";
import "./Palettes.css";

const Palettes = () => {
  const PALETTES_PER_PAGE = 10;
  const [palettes, setPalettes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get(
        `http://www.colourlovers.com/api/palettes/new?format=json&numResults=${PALETTES_PER_PAGE}&resultOffset=${offset}`
      )
      .then((result) => {
        setPalettes((prevPalettes) => [...prevPalettes, ...result.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error while retrieving new palettes");
        setIsLoading(false);
      });
  }, [offset]);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setOffset((offset) => offset + PALETTES_PER_PAGE);
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <InfiniteScroll
        className="palettes-container"
        loadMore={loadMore}
        useWindow={true}
        hasMore={!isLoading}
        threshold={100}
      >
        {palettes.map((palette) => {
          return <Palette key={palette.id} value={palette} />;
        })}
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default Palettes;
