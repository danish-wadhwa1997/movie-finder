import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";

export default function MovieDetailCard(props) {
  const { movie } = props;
  return (
    <Card>
      <CardActionArea>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              alt={movie.Title}
              // height="140"
              image={movie.Poster}
              title={movie.Title}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {movie.Title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
