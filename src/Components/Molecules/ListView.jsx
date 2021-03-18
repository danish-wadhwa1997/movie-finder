import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import MovieCard from "../Atoms/MovieCard";
import { useTheme } from "@material-ui/core/styles";
export default function ListView(props) {
  const theme = useTheme();
  if (props.movies && props.movies.length === 0) {
    return (
      <Box
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }}
        p={20}
      >
        <Typography align="center" component="div" display="block" variant="h6">
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
        alignItems="stretch"
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }}
      >
        {props.movies.map((movie) => (
          <Grid
            key={movie.imdbID}
            item
            xs={12}
            sm={6}
            md={4}
            style={{ padding: "1rem" }}
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
