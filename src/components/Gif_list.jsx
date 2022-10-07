import React from "react";
import Gif from "./Gif";

const Gif_list = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />;
      })}
    </div>
  );
};

export default Gif_list;
