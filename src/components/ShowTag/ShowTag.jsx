import React from "react";
import { connect } from "react-redux";
import Preloader from "../preloader";

let ShowTag = (props) => {
  let arr = [];

  if (props.result.length != 0) {
    for (let [key, value] of Object.entries(props.result["0"])) {
      arr.push(`${key}: ${value}`);
    }
  }

  return (
    <section className="section">
      <div id="result-container" className="column is-5 is-offset-2">
        <article className="message is-dark">
          <div className="message-header">
            <p>Primary</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div id="content" className="message-body">
            {arr.length != 0 &&
              arr.map((el) => {
                return <p>{el}</p>;
              })}
          </div>
        </article>
      </div>
    </section>
  );
};

let mapStateToProps = (state) => {
  return {
    result: state.appMain.searchResult,
    isFetching: state.appMain.isFetching,
  };
};

export default connect(mapStateToProps, {})(ShowTag);
