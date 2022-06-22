import React from "react";
import Column from "./Column";

function SearchResults({ data }) {
  return (
    <div className="search-results">
      {data.map((element, i) => (
        <Column element={element}></Column>
      ))}
    </div>
  );
}

export default SearchResults;
