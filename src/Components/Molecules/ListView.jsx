import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import MovieCard from "../Atoms/MovieCard";
export default function ListView(props) {
  if (props !== undefined && !props.movies) {
    return (
      <Box>
        <Typography
          align="center"
          color="primary"
          component="div"
          display="block"
          variant="h6"
        >
          No Movie to show with this value.
        </Typography>
      </Box>
    );
  } else {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        spacing={4}
      >
        {props.movies.map((movie) => (
          <Grid key={movie.imdbID} item xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
