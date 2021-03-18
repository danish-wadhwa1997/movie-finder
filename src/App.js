import Container from "@material-ui/core/Container";
import Navbar from "./Components/Atoms/Navbar";
import ListView from "./Components/Molecules/ListView";
import DetailView from "./Components/Molecules/DetailView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { API_KEY } from "./Contants";
import { get } from "axios";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [lightTheme, setLightTheme] = React.useState(true);
  const getMoviesBySearch = (value) => {
    // setMovies(value);
    console.log("movies changed", value);
    get(`http://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`)
      .then((res) => {
        if (res.status === 200) {
          setMovies(res.data.Search);
          // props.onSearch(res.data.search);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const themeChange = (value) => {
    setLightTheme(value);
  };
  const theme = lightTheme
    ? createMuiTheme({
        palette: {
          primary: {
            main: grey[50],
            contrastText: grey[900],
          },
          secondary: {
            main: "#00e676",
            contrastText: "#fafafa",
          },
        },
      })
    : createMuiTheme({
        palette: {
          primary: {
            main: grey[900],
            contrastText: "#fafafa",
          },
          secondary: {
            main: "#00e676",
            contrastText: "#fafafa",
          },
        },
      });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container color="primary">
          <Navbar
            onSearch={getMoviesBySearch}
            onSwitch={themeChange}
            movies={movies}
          />
          <Switch>
            <Route exact path="/:id" component={DetailView} />
            <Route exact path="/">
              <ListView movies={movies} />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
