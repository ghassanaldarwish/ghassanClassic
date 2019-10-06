import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./steppersStyles";

function PaymentStepper(props: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
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
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
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
