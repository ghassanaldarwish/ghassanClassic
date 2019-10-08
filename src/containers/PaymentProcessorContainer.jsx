import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../storeRedux/actions";
import PaymentStepper from "../components/steppers";
import TextFields from "../components/ui/inputFieldsGroup";
import CheckboxesGroup from "../components/ui/checkboxesGroup";
import RadioButtonsGroup from "../components/ui/radioButtonsGroup";
import { saveAs } from "file-saver";
import axios from "axios";
import { BASE_URL } from "../variables";

export class PaymentProcessorContainer extends Component {
  fetchPdfFile = () => {
    axios
      .get(BASE_URL + "/download", {
        responseType: "blob"
      })
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "ghassan-classic-fitness-program.pdf");
        window.location.replace("https://ghassanclassic.com");
      });
  };
  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return <TextFields user={this.props.user} />;
      case 1:
        return <CheckboxesGroup user={this.props.user} />;
      case 2:
        return <RadioButtonsGroup />;
      default:
        return "Uknown stepIndex";
    }
  };
  render() {
    return (
      <PaymentStepper
        userData={this.props.user}
        BASE_URL={BASE_URL}
        userInfoRegister={this.props.userInfoRegister}
        userInfoProgram={this.props.userInfoProgram}
        fetchPdfFile={this.fetchPdfFile}
        getStepContent={this.getStepContent}
      ></PaymentStepper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  actions
)(PaymentProcessorContainer);
