import React from "react";

let InputField = (props) => {
  return (
    <section className="section">
      <div className="column is-half is-offset-2">
        <div id="byQueryBlock" className="search">
          <select className="searchType">
            <option></option>
            <option>People</option>
            <option>Planets</option>
            <option>Species</option>
          </select>
          <input
            className="is-large input"
            type="text"
            placeholder="Search..."
            value={props.inputText}
            onChange={(e) => props.handleTextChange(e)}
          />
          <button
            id="byQueryBtn"
            className="is-large button"
            onClick={() => props.handleSubmit(props.inputText)}
          >
            Search
          </button>
        </div>
        <br />
        <br />
        <div className="search">
          <select className="searchTypeById">
            <option></option>
            <option>People</option>
            <option>Planets</option>
            <option>Species</option>
          </select>
          <input
            className="is-large input inputById"
            type="text"
            placeholder="Search by Id..."
            value={props.inputId}
            onChange={(e) => props.handleIdChange(e)}
          />
          <button id="byIdQueryBtn" className="is-large button">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default InputField;
