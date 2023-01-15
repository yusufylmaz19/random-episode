import "./app.css";
import React, { useState } from "react";
import data from "./data.json";

function App() {
  const [episode, setEpisode] = useState(1);
  const [season, setSeason] = useState(1);
  const [loading, setLoading] = useState(true);

  const setRandoms = () => {
    setLoading(false);
    setTimeout(() => {
      const randomSeason = Math.floor(Math.random() * 9) + 1;
      const randomEpisode =
        Math.floor(Math.random() * data[randomSeason].episodes.length) + 1;
      setEpisode(randomEpisode);
      setSeason(randomSeason);
    }, 500);
    setTimeout(() => {
      setLoading(true);
    }, 700);
  };

  return (
    <>
      <div className="container">
        {!loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="box">
            <p className="title">{`"${
              data[season].episodes[episode - 1].title
            }"`}</p>
            <p className="info">{`"S:${season}, E:${episode}"`}</p>
            <p className="description">
              {`"${data[season].episodes[episode - 1].description}"`}
            </p>
          </div>
        )}
      </div>
      <button
        className="btn"
        onClick={() => {
          setRandoms();
        }}
      >
        Random
      </button>
    </>
  );
}

export default App;
