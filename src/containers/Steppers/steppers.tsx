import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextFields from "../../components/ui/inputFieldsGroup";
import CheckboxesGroup from "../../components/ui/checkboxesGroup";
import RadioButtonsGroup from "../../components/ui/radioButtonsGroup";
import { saveAs } from "file-saver";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    tittle: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    downloadButton: {
      margin: "auto"
    }
  })
);

function getSteps() {
  return ["المعلومات الشخصيه", "معلومات المنهج", "طرق الدفع"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <TextFields />;
    case 1:
      return <CheckboxesGroup />;
    case 2:
      return <RadioButtonsGroup />;
    default:
      return "Uknown stepIndex";
  }
}

function HorizontalLabelPositionBelowStepper(props: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const fetchPdfFile = () => {
    axios
      .get("https://ghassan-classic-backend.herokuapp.com/download", {
        responseType: "blob"
      })
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "ghassan-classic-fitness-program.pdf");
        window.location.replace("https://ghassanclassic.com");
      });
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
              onClick={fetchPdfFile}
            >
              Download PDF
            </Button>
          </div>
        ) : (
          <div style={{ margin: "auto", width: "90%" }}>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default withRouter(HorizontalLabelPositionBelowStepper);
