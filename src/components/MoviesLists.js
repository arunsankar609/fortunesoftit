import { Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./reusables/Cards";
import SmallMovieCard from "./reusables/MovieCard";
const MoviesLists = () => {
  const [moviesList, setMoviesList] = useState([]);
  const getMovieData = async () => {
    const headers = {
      Authorization: "Bearer Wookie2019",
    };

    try {
      const response = await axios.get("https://wookie.codesubmit.io/movies", {
        headers,
      });
      setMoviesList(response.data.movies);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <Grid>
     
      <Paper style={{ overflowX: "auto" }}>
      <Typography  component="h5" variant="h5">Actions</Typography>
        <Container sx={{ marginLeft: 0 }}>
          <Grid container wrap="nowrap" marginTop={2} padding={2}>
            {moviesList?.map((movie) => (
              <Grid item key={movie.id}>
                <SmallMovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
        
      </Paper>
      <Paper style={{ overflowX: "auto" }}>
      <Typography  component="h5" variant="h5">Actions</Typography>
        <Container sx={{ marginLeft: 0 }}>
          <Grid container wrap="nowrap" marginTop={2} padding={2}>
            {moviesList?.map((movie) => (
              <Grid item key={movie.id}>
                <SmallMovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
        
      </Paper>
    </Grid>
  );
};

export default MoviesLists;
