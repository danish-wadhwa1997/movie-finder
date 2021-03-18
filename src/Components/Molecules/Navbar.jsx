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
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const textfield = makeStyles(
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
  const classes = textfield();
  const history = useHistory();
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState();

  const getSearchResults = (searchValue) => {
    props.onSearch(searchValue);
  };

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={2} md={3}>
              <Typography variant="h6"> Logo</Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                className={classes.root}
                freeSolo
                margin="none"
                size="small"
                value={value || ""}
                inputValue={inputValue || ""}
                id="free-solo-2-demo"
                options={props.movies || []}
                getOptionLabel={(option) => option.Title || ""}
                onChange={(e, newValue) => {
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
                        <InputAdornment position="end">
                          <IconButton
                            onClick={(e) => {
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
            <Grid item xs={2} md={3} style={{ textAlign: "center" }}>
              <Switch
                checked={props.lightTheme}
                onChange={props.onSwitch}
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
