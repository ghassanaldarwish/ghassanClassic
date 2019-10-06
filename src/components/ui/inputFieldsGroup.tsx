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
  email: string;
  password: string;
  comfirmPassword: string;
}

export default function TextFields(props: any) {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    comfirmPassword: localStorage.getItem("comfirmPassword") || ""
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        اضف معلومات التواصل الخاصه بك
      </Typography>
      <TextField
        value={values.name}
        id="name"
        label="الاسم"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        value={values.email}
        id="email"
        label="الايميل"
        className={classes.textField}
        onChange={handleChange("email")}
        margin="normal"
      />
      <TextField
        value={values.password}
        id="password"
        label="كلمه السر"
        className={classes.textField}
        onChange={handleChange("password")}
        margin="normal"
      />
      <TextField
        value={values.comfirmPassword}
        id="comfirmPassword"
        label="تاكيد كلمه السر"
        className={classes.textField}
        onChange={handleChange("comfirmPassword")}
        margin="normal"
      />
    </div>
  );
}
