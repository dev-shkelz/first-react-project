import React, { useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import useFilteredData from "../../../hooks/useFilteredData";

const SearchBar = () => {
  const { posts, setPosts } = useFetchData();
  const [query, setQuery] = useState("");
  const results = useFilteredData(posts, query);
  // useEffect(() => {
  //   setPosts(results);
  // }, [results, setPosts]);
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="SEARCH OUR CINEMA"
        onChange={(evt) => {
          setQuery(evt.target.value);
          setPosts(results);
          //??
        }}
      />
    </div>
  );
};

export default SearchBar;
