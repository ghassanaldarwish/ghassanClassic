import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          يرجى اختيار واحده من طرق الدفغ الدفع ادناه
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="payment1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="payment2"
            control={<Radio />}
            label="ماستر كارد/ فيزا كارد"
          />
          <FormControlLabel value="male" control={<Radio />} label="باي بال" />
          <FormControlLabel
            value="payment3"
            control={<Radio />}
            label="تحويل بنكي"
          />
          <FormControlLabel
            value="payment4"
            control={<Radio />}
            label="وستر يونين"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
