import "./App.css";
import { useState, useEffect } from "react";
import { modifier } from "./modifiers.js";
import MovieBlock from "./movies";

function App() {
  async function search(e) {
    console.log(searchVal);

    fetch(`http://localhost:3000/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: `${searchVal}` }),
    })
      .then((response) => response.json())
      .then((data) => {
        let dataToRet = data;
        updateSearchElms(dataToRet.titles);
        console.log(searchElms, dataToRet.titles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function hover(e) {
    // console.log(e.target);
  }

  const [searchVal, setsearchVal] = useState("");
  let [currentElm, updateElm] = useState("");
  let [headAnimeStyle, updateheadAnimeStyle] = useState({});
  let [searchElms, updateSearchElms] = useState([]);

  const updateSearchVal = (e) => {
    setsearchVal(e.target.value);
  };

  const UpdateheadAnimeStyle = (e) => {
    updateheadAnimeStyle(
      Object.keys(headAnimeStyle).length === 0 ? modifier.headTextAnimation : {}
    );
  };

  useEffect(() => {
    console.log();
    (function init() {
      fetch(`http://localhost:3000/search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ data: `${searchVal}` }),
      })
        .then((response) => response.json())
        .then((data) => {
          let dataToRet = data;
          updateSearchElms(dataToRet.titles);
          console.log(searchElms, dataToRet.titles);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <div className="main_cont">
      <h1 className="head_text" onMouseEnter={hover}>
        <span className="movie_text">M</span>
        <span className="movie_text">o</span>
        <span className="movie_text">v</span>
        <span className="movie_text">i</span>
        <span className="movie_text">e</span>

        <span className="browser_text" style={headAnimeStyle}>
          <span>B</span>
          <span>r</span>
          <span>o</span>
          <span>w</span>
          <span>s</span>
          <span>e</span>
          <span>r</span>
        </span>
      </h1>

      <div className="search_container">
        <div className="search_img"></div>

        <div className="search_parent">
          <input
            onFocus={UpdateheadAnimeStyle}
            onChange={updateSearchVal}
            onBlur={UpdateheadAnimeStyle}
            type="text"
            name=""
            id="search"
          />
          <div className="search_results"></div>
        </div>

        <button className="search" onClick={search}>
          Search
        </button>
      </div>

      <main className="movie_container">
        {searchElms ? (
          searchElms.map((movie) => (
            <MovieBlock
              title={movie.title}
              img={movie.image}
              key={movie.id}
              id={movie.id}
            />
          ))
        ) : (
          <p>No results!</p>
        )}
      </main>
    </div>
  );
}

export default App;
