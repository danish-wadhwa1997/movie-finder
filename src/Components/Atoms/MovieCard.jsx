import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
function MovieCard(props) {
  const theme = useTheme();
  const { Title, Poster, imdbID, Year } = props.movie;
  return (
    <Link to={`/${imdbID}`} style={{ textDecoration: "none" }}>
      <Card
        raised
        style={{
          height: "100%",
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={Title}
            image={Poster}
            // height="140"
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
