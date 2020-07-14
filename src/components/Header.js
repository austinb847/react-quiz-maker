import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Quiz Creator</h1>
      <Link to="/">Home </Link>
      <br />
      <Link to="/signin">Login</Link>
    </React.Fragment>
  )
}

export default Header;