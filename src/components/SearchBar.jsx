import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, useterm] = useState("");
  const handleChange = (event) => {
    useterm(event.target.value);
    props.searchFonction(event.target.value);
  };

  return (
    <input
      type="text"
      value={term}
      className="form-control form-search"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
