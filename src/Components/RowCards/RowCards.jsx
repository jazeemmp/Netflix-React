import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowCards.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";

function RowCards({ isBig, title, url }) {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ytUrl, setYtUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, [url]); // Ensure you include 'url' in the dependency array to refetch if 'url' changes

  const toggleYt = async (id) => {
    try {
      const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      const videos = response.data.results;

      if (videos.length !== 0) {
        const trailer = videos.find((video) => video.type === "Trailer");
        if (trailer) {
          setYtUrl(trailer.key);
          setIsOpen(true); // Open modal only if a trailer is found
        } else {
          alert("No trailer available for this movie");
        }
      } else {
        alert("No videos found for this movie.");
      }
    } catch (error) {
      console.error("Error fetching YouTube video:", error);
      alert("Failed to fetch video. Please try again.");
    }
  };

  const videoOptions = {
    height: "500",
    width: "1000",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1 className="heading">{title}</h1>
      <div className="posters">
        {movies.map((movie) => (
          <img
            className={isBig ? "bigCard" : "smallCard"}
            key={movie.id}
            src={`${imageURL + movie.backdrop_path}`}
            alt={movie.title || movie.name}
            onClick={() => toggleYt(movie.id)}
          />
        ))}
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={() => setIsOpen(false)} className="close-button">
                <i className="fa-solid fa-x"></i>
              </span>
              {ytUrl ? (
                <YouTube videoId={ytUrl} opts={videoOptions} />
              ) : (
                <p>No video available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RowCards;
