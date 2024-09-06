import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/trending/all/week?api_key=${API_KEY}&language=en-US1`
        );
        let num = Math.floor(Math.random() * 21);
        setMovie(response.data.results[num]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${imageURL + movie.backdrop_path})` }}
      className="banner-container"
    >
      <div className="content">
        <h1 className="title">
          {movie.original_title ? movie.original_title : movie.name}
        </h1>
        <p className="description">{movie.overview}</p>
        <div className="btns-container">
          <button className="btn-play">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="btn-list">
            <i className="fa-solid fa-plus"></i> My List
          </button>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default Banner;
