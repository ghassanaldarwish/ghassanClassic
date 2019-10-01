import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <p>I AM BACK MF</p>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
      </header>
    </div>
  );
};

export default App;
