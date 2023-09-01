import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
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

  } = movie;

  return (
    <Card
      sx={{
        maxWidth: 600,
        height: "100%", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        width="100%"
        image={poster}
        alt={`${title} Poster`}
      />
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {genres.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            Director: {director}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Cast: {cast.join(", ")}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Length: {length}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            IMDb Rating: {imdb_rating}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
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

export default MovieCard;
