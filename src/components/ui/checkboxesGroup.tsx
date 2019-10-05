import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column"
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" gutterBottom>
        معلومات لتصميم المنهج خصيصا لك
      </Typography>
      <TextField id="standard-name" label="عمرك" margin="normal" />
      <TextField id="standard-name" label="وزنك" margin="normal" />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">المكملات و الاستعمال</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange("gilad")}
                value="gilad"
              />
            }
            label="هل تاخذ مكملات غذائيه؟"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange("jason")}
                value="jason"
              />
            }
            label="هل تاخذ سارمس؟"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange("antoine")}
                value="antoine"
              />
            }
            label="هل تاخذ منشطات و هرمونات؟"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
