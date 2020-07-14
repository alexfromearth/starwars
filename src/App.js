import React from "react";
import "./App.css";
import Header from "./components/header";
import InputContainer from "./components/Input/inputContainer";
import ShowTag from "./components/ShowTag/ShowTag";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <InputContainer />
          <ShowTag />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
