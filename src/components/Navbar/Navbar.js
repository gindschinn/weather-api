import React from "react";

import "./Navbar.css";

const navbar = props => {
  return (
    <nav className="fixed-top navbar navbar-expand-sm navbar-dark bg-dark">
      <span className="navbar-brand mb-0 text-uppercase">Weather App</span>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbar-menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-menu">
        <form
          onSubmit={props.getNewCity}
          className="form-inline my-2 my-lg-0 ml-auto"
        >
          <input
            className="form-control-lg mr-sm-2"
            onChange={props.cityInputChanged}
            value={props.location}
            type="search"
            placeholder="Location"
            aria-label="Location"
          />
          <button
            className="btn btn-lg btn-outline-light my-2 my-sm-0 text-uppercase"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </nav>
  );
};

export default navbar;
