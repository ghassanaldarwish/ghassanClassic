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
interface State {
  age: any;
  weight: any;
  foodSupplement: any;
  sarms: any;
  steroids: any;
}
export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState<State>({
    age: localStorage.getItem("age") || "",
    weight: localStorage.getItem("weight") || "",
    foodSupplement: localStorage.getItem("foodSupplement") || false,
    sarms: localStorage.getItem("sarms") || false,
    steroids: localStorage.getItem("steroids") || false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
    console.log("on change ==>", state);
  };

  const handleChangeText = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.value });
  };

  const { age, weight, steroids, sarms, foodSupplement } = state;
  const error =
    [age, weight, steroids, sarms, foodSupplement].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" gutterBottom>
        معلومات لتصميم المنهج خصيصا لك
      </Typography>
      <TextField
        id="age"
        value={age}
        onChange={handleChangeText("age")}
        label="عمرك"
        margin="normal"
      />
      <TextField
        id="weight"
        value={weight}
        onChange={handleChangeText("weight")}
        label="وزنك"
        margin="normal"
      />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">المكملات و الاستعمال</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={foodSupplement}
                id="foodSupplement"
                onChange={handleChange("foodSupplement")}
                value="foodSupplement"
              />
            }
            label="هل تاخذ مكملات غذائيه؟"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="sarms"
                onChange={handleChange("sarms")}
                value="sarms"
                checked={sarms}
              />
            }
            label="هل تاخذ سارمس؟"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="steroids"
                onChange={handleChange("steroids")}
                value="steroids"
                checked={steroids}
              />
            }
            label="هل تاخذ منشطات و هرمونات؟"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
