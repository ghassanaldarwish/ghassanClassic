import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./steppersStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import "./steppers.css";

function PaymentStepper(props: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = React.useState({
    loading: false
  });
  const steps = ["المعلومات الشخصيه", "معلومات المنهج", "طرق الدفع"];

  const handleNext = (e: any) => {
    e.preventDefault();
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    if (activeStep === 0) {
      const userInfo = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        comfirmPassword: e.target.comfirmPassword.value
      };
      console.log("activeStep ==>", userInfo);
      console.log("process.env.NODE_ENV", process.env.NODE_ENV);

      props.userInfoRegister(userInfo);
    }
    if (activeStep === 1) {
      const userProgramInfo = {
        age: e.target.age.value,
        weight: e.target.weight.value,
        foodSupplement: e.target.foodSupplement.checked,
        sarms: e.target.sarms.checked,
        steroids: e.target.steroids.checked
      };

      props.userInfoProgram(userProgramInfo);

      console.log("loading ====>", state.loading);
      console.log("  props.userData==>", props.userData);
    }
    if (activeStep === 2) {
      setState({ ...state, loading: true });
      console.log("  props.userData==>", props.userData);
      axios
        .post(props.BASE_URL + "/purchasing-program-user-data", props.userData)
        .then(res => {
          console.log("res from BE=>", res.data);
          setState({ ...state, loading: false });
          localStorage.removeItem("age");
          localStorage.removeItem("weight");
          localStorage.removeItem("foodSupplement");
          localStorage.removeItem("sarms");
          localStorage.removeItem("steroids");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.removeItem("comfirmPassword");
        });
      console.log("loading ====>", state.loading);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return state.loading ? (
    <div className="SpinnerWraper">
      <CircularProgress className="Spinner" disableShrink />
    </div>
  ) : (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div
            style={{
              margin: "auto",
              width: "90%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography className={classes.tittle}>
              Download the pdf file
            </Typography>
            <Button
              className={classes.downloadButton}
              variant="contained"
              color="secondary"
              onClick={props.fetchPdfFile}
            >
              Download PDF
            </Button>
          </div>
        ) : (
          <div style={{ margin: "auto", width: "90%" }}>
            <Typography className={classes.instructions}></Typography>
            <form onSubmit={e => handleNext(e)} noValidate autoComplete="off">
              {props.getStepContent(activeStep)}

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default PaymentStepper;
