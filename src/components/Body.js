import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Button, Container } from "@mui/material";
import MovieCard from "./reusables/Cards";

const Body = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const getMovieData = async () => {
    const headers = {
      Authorization: "Bearer Wookie2019",
    };

    try {
      const response = await axios.get("https://wookie.codesubmit.io/movies", { headers });
      setMoviesList(response.data.movies);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [selectedGenre]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const genres = ["Action", "Comedy","Adventure", "Drama","Biography", "History", "Crime"];

  return (
    <Container sx={{ minHeight: '100vh', padding: '20px',width:"100%" }}>
      <Container
  sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '8px',
    marginTop: '8px',
    flexWrap: 'wrap', 
    gap: '8px', 
    flexDirection: { xs: 'column', sm: 'row' },
  }}
>
  {genres.map((genre) => (
    <Button
      key={genre}
      onClick={() => handleGenreChange(genre)}
      variant={selectedGenre === genre ? 'contained' : 'outlined'}
      sx={{
        marginBottom: '8px',
        backgroundColor: selectedGenre === genre ? 'darkblue' : 'transparent',
        borderRadius:"200px",
        color:'whitesmoke'
      }}
    >
      {genre}
    </Button>
  ))}
  <Button
    onClick={() => handleGenreChange(null)}
    variant={!selectedGenre ? 'contained' : 'outlined'}
    sx={{ marginBottom: '8px',borderRadius:"200px",color:"white" }}
  >
    All Genres
  </Button>
</Container>

      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '8px',marginTop:"8px" }} >
        {moviesList
          .filter((movie) => !selectedGenre || movie.genres.includes(selectedGenre))
          .map((movie) => (
            <Grid key={movie.slug} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Body;
