import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(
  {
    root: {
      background: "#FFF",
      borderRadius: "5rem",
      "&:hover": {
        borderRadius: "5rem",
      },
      notchedOutline: {
        borderRadius: "5rem",
      },
    },
  },
  { name: "MuiOutlinedInput" }
);

export default function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [lightTheme, setLightTheme] = React.useState(true);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState();

  const handleThemeToogle = () => {
    setLightTheme(!lightTheme);
    props.onSwitch(lightTheme);
  };

  const getSearchResults = (searchValue) => {
    console.log("results", searchValue);
    // get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setMovies(res.data.Search);
    //       // props.onSearch(res.data.search);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    props.onSearch(searchValue);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={1}>
              Logo
            </Grid>
            <Grid item xs>
              <Autocomplete
                className={classes.root}
                freeSolo
                size="small"
                value={value || ""}
                inputValue={inputValue || ""}
                id="free-solo-2-demo"
                options={props.movies || []}
                getOptionLabel={(option) => option.Title || ""}
                onChange={(e, newValue) => {
                  console.log("onChange clicked", newValue);
                  setValue(newValue);
                  if (e.key === "Enter") {
                    getSearchResults(inputValue);
                  } else {
                    if (
                      !(
                        newValue === "" ||
                        newValue === undefined ||
                        newValue === null
                      )
                    ) {
                      let path = `/${newValue.imdbID}`;
                      history.replace(path);
                    }
                  }
                }}
                onInputChange={(e, newInputValue) => {
                  console.log("input change clicked", newInputValue);
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      endAdornment: (
                        <InputAdornment>
                          <IconButton
                            onClick={(e) => {
                              console.log("click", inputValue);
                              // onSearchClick(inputValue);
                              getSearchResults(inputValue);
                            }}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <Switch
                checked={lightTheme}
                onChange={handleThemeToogle}
                name="themeSwitch"
                inputProps={{ "aria-label": "Light/Dark Mode Toggle" }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
