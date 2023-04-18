import React, { useEffect, useState } from "react";
import '../styles/app.css'
import Loader from '../assets/steam-loading.gif'

const GetApi = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://swapi.dev/api/films";

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setMoviesData(movies.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
    {!loading && moviesData.map((movie) => {
      return (
        <div key={movie.episode_id} className="card">
        <h2>{movie.title}</h2>
        <span className="date">{movie.release_date}</span>
        <p>{movie.opening_crawl.substring(0, 260)}...</p>
        <div className="more-info">
          <a href="#home">More Info</a>
        </div>
      </div>
        
      );
    })}
    {!loading && moviesData.length === 0 && <p>There are no movies...</p>}
    {loading && <img src={Loader} alt='loading..' style={{textAlign: 'center', width: '150px'}}/>}
  </div>
  );
};
export default GetApi;
