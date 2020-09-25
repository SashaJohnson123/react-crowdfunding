import React from "react";
import { Link } from "react-router-dom";
function Nav(props) {
  const { image } = props;
  return (
    <nav>
      <div className="Menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Subscribe</Link>
        <Link to="/">Contact</Link>
      </div>
      <img className="Logo" src={image} alt="Logo" />
    </nav>
  );
}
export default Nav;
