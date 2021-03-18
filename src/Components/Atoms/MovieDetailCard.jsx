import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export default function MovieDetailCard(props) {
  const theme = useTheme();
  const { movie } = props;
  return (
    <Card
      raised
      style={{
        margin: "2rem",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      }}
    >
      <CardActionArea>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              alt={movie.Title}
              image={movie.Poster}
              title={movie.Title}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                Title: {movie.Title}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h5">
                Year: {movie.Year}
                <br></br>
                Id: {movie.imdbID}
                <br></br>
                Director: {movie.Director}
                <br></br>
                imdbRating: {movie.imdbRating}
                <br></br>
                Runtime: {movie.Runtime}
                <br></br>
                Language: {movie.Language}
                <br></br>
                Genre: {movie.Genre}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
