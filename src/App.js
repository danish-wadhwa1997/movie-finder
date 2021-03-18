import Navbar from "./Components/Molecules/Navbar";
import Box from "@material-ui/core/Box";
import ListView from "./Components/Molecules/ListView";
import DetailView from "./Components/Molecules/DetailView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { getMovies } from "./API";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [lightTheme, setLightTheme] = React.useState(true);
  const getMoviesBySearch = (value) => {
    if (value === "" || value === undefined || value === null) {
      setMovies([]);
    } else {
      getMovies(value)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.Response.toLowerCase() === "true") {
              setMovies(res.data.Search);
            } else {
              setMovies([]);
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const themeChange = () => {
    setLightTheme(!lightTheme);
  };
  const theme = !lightTheme
    ? createMuiTheme({
        palette: {
          primary: {
            main: grey[400],
            light: grey[100],
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
        <Box
          style={{
            backgroundColor: theme.palette.primary.light,
            height: "100vh",
          }}
        >
          <Navbar
            onSearch={getMoviesBySearch}
            onSwitch={themeChange}
            movies={movies}
            lightTheme={lightTheme}
          />
          <Switch>
            <Route exact path="/:id" component={DetailView} />
            <Route exact path="/">
              <ListView movies={movies} />
            </Route>
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
