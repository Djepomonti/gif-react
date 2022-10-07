import React from "react";

const Gif = (props) => {
  const handleClick = () => {
    props.selectGif(props.id);
  };

  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;

  return <img src={src} alt="" className="gif" onClick={handleClick} />;
};

export default Gif;
