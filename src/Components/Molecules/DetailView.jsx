import { Box, Button, Grid } from "@material-ui/core";
import React from "react";
import { getMovieDetails } from "../../API";
import { useParams, useHistory } from "react-router-dom";
import MovieDetailCard from "../Atoms/MovieDetailCard";

export default function DetailView() {
  const [movie, setMovie] = React.useState();
  const { id } = useParams();
  const history = useHistory();
  React.useEffect(() => {
    getMovieDetails(id)
      .then((res) => {
        if (res.status === 200) {
          setMovie(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <Box p={3}>
      <Grid container direction="column" justify="center" alignItems="center">
        {movie && (
          <Grid item xs>
            {" "}
            <MovieDetailCard movie={movie} />
          </Grid>
        )}
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              history.replace("/");
            }}
          >
            View Similar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
