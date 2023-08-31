import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SmallMovieCard = ({ movie }) => {
  const {
    title,
    overview,
    genres,
    imdb_rating,
    director,
    cast,
    length,
    released_on,
    poster,
    backdrop,
  } = movie;

  return (
    <Card
      sx={{
        width: "500px",
        height: "100%", 
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray",
      }}
    >
      <CardMedia
        component="img"
        height="110px"
        width="110px"
        image={poster}
        alt={`${title} Poster`}
      />
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h5" variant="h5" color="white">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {genres.join(", ")}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="subtitle1" color="white">
            Director: {director}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Cast: {cast.join(", ")}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Length: {length}
          </Typography>
          <Typography variant="subtitle1" color="white">
            IMDb Rating: {imdb_rating}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Released:{" "}
            {new Date(released_on).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SmallMovieCard;
