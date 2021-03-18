import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
function MovieCard(props) {
  const { Title, Poster, imdbID, Year } = props.movie;
  return (
    <Link to={`/${imdbID}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={Title}
            // height="140"
            image={Poster}
            title={Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {Title} ( {Year} )
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default MovieCard;
