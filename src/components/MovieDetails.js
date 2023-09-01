import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from './reusables/Cards';
import axios from 'axios';
const MovieDetails = () => {
    const { id } = useParams();
    const [moviesList, setMoviesList] = useState([]);

  const getMovieData = async () => {
    const headers = {
      Authorization: "Bearer Wookie2019",
    };

    try {
      const response = await axios.get("https://wookie.codesubmit.io/movies", { headers });
      const filteredMovie=response.data.movies.filter((item)=>(item.id===id))
      console.log(filteredMovie);
      setMoviesList(filteredMovie);
      console.log(moviesList);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
        {moviesList.map((movie)=>(<MovieCard movie={movie}/>))}
    </div>
  )
}

export default MovieDetails