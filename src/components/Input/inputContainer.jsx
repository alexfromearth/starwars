import React from "react";
import InputField from "./Input";
import { connect } from "react-redux";
import { setInput, setIdInput, getCharacters } from "../../redux/mainReduser";

let InputContainer = (props) => {
  let handleTextChange = (e) => {
    props.setInput(e.target.value);
  };
  let handleIdChange = (e) => {
    props.setIdInput(e.target.value);
  };
  let handleSubmit = (text) => {
    if (!text) return;
    props.getCharacters(text);
  };
  return (
    <InputField
      {...props}
      handleTextChange={handleTextChange}
      handleIdChange={handleIdChange}
      handleSubmit={handleSubmit}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    inputText: state.appMain.inputText,
    inputId: state.appMain.inputId,
  };
};

export default connect(mapStateToProps, {
  setInput,
  setIdInput,
  getCharacters,
})(InputContainer);
