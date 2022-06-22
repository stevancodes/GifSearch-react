import React, { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";
import "./style.scss";

export const App = (props) => {
  const [input, setInput] = useState("mrbean");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Wz73ukioNDkVBsStn6TGf8JQdyAdf6Jm&q=${input}&limit=35&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => {
        const colCount = 4;
        const sortedData = data.data.reduce((acc, e, i) => {
          const niz = i % colCount;
          if (!acc[niz]) acc[niz] = [];
          acc[niz].push(e);
          return acc;
        }, []);
        setData(sortedData);
      });
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  console.log(data);

  return (
    <div className="app">
      {/* <header>{title}</header> */}
      <main>
        <h1>Search Giphy</h1>
        <input value={input} onInput={handleInput}></input>
        <SearchResults data={data} />
      </main>
    </div>
  );
};

export default App;
