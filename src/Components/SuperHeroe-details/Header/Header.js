import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

export default function Header({ name, publisher }) {
  return (
    <>
      <div className="header">
        <div className="container-name">
          <h1>{name}</h1>
          <h2>{publisher}</h2>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
