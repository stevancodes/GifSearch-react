import React from "react";
import Slika from "./Slika";

function Column({ element }) {
  return (
    <div className="result-col">
      {element.map((element, i) => (
        <Slika element={element}></Slika>
      ))}
    </div>
  );
}

export default Column;
