import React, { useState } from "react";
import Gif from "./components/Gif";
import Gif_list from "./components/Gif_list";
import SearchBar from "./components/SearchBar";
import "./index.scss";
import giphy from "giphy-api";

const GIPHY_API_KEY = "1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [selectedGifId, setSelectedGifId] = useState("xT9IgDEI1iZyb2wqo8");

  const search = (query) => {
    giphy(GIPHY_API_KEY).search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        setGifs(res.data);
      }
    );
  };

  const selectGif = (id) => {
    setSelectedGifId(id);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFonction={search} />
        <div className="selected-gif">
          <Gif id={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <Gif_list gifs={gifs} selectGif={selectGif} />
      </div>
    </div>
  );
};

export default App;
