import { Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SmallMovieCard from "./reusables/MovieCard";
import { Link } from "react-router-dom";

const MoviesLists = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [genres, setGenres] = useState([]);

  const getMovieData = async () => {
    const headers = {
      Authorization: "Bearer Wookie2019",
    };

    try {
      const response = await axios.get("https://wookie.codesubmit.io/movies", {
        headers,
      });
      setMoviesList(response.data.movies);

      const uniqueGenres = [
        ...new Set(response.data.movies.map((movie) => movie.genres).flat()),
      ];
      setGenres(uniqueGenres);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Grid container spacing={2}>
      {genres.map((genre) => (
        <Grid item key={genre} xs={12} md={12} lg={12}>
          <Paper style={{ overflowX: "auto", backgroundColor: "black", borderBottom: "1px solid white" }}>
            <Typography
              component="h5"
              variant="h5"
              style={{
                position: "sticky",
                top: 0,
                marginLeft: "15px",
                marginTop:"10px",
                color: "white",
                zIndex: 1,
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              {genre}
            </Typography>

            <Container sx={{ marginLeft: 0 }}>
              <Grid
                container
                wrap="nowrap"
                marginTop={2}
                padding={2}
                spacing={2}
              >
                {moviesList
                  .filter((movie) => movie.genres.includes(genre))
                  .map((movie) => (
                    <Grid item key={movie.id} spacing={2}>
                     <Link to={`/movieDetails/`+movie.id} style={{ textDecoration: "none" }}> <div
                    style={{
                    
                      position: "relative",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <SmallMovieCard movie={movie} />
                  </div></Link>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesLists;
