import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexFlow: "column"
    },
    title: {
      fontSize: 14
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  })
);

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        اضف معلومات التواصل الخاصه بك
      </Typography>
      <TextField
        id="standard-name"
        label="الاسم"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="الايميل"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="كلمه السر"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="تاكيد كلمه السر"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
    </form>
  );
}
