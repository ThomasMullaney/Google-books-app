import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          Book
        </label>
        <input 
          className="form-control"
          id="title"
          type="text"
          value={q}
          placeholder="Captain Underpants"
          name="q"
          onChange={handleInputChange}
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type='submit'
          className="btn btn-lg btn-danger float-right">
            Submit Search
          </button>
      </div>
    </form>
  );
}

export default Form;
