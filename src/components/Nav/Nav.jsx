import React from "react";
import { Link } from "react-router-dom";
function Nav(props) {
  const { image } = props;
  return (
    <div>
      <div id="img-container">
        <img className="Logo" src={image} alt="Logo" />
      </div>

      <div className="Menu">
        <Link to="/">Home</Link>
      </div>
      <div className="Menu">
        <Link to="/">About</Link>
      </div>
      <div className="Menu">
        <Link to="/">Subscribe</Link>
      </div>
      <div className="Menu">
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
}
export default Nav;
