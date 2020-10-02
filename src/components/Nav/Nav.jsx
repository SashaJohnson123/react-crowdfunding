import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Nav(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, [location]);

  const logout = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  const { image } = props;
  return (
    <nav>
      <div className="Menu">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Subscribe">Subscribe</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/createproject/">Add Your Local Project</Link>

        {!loggedIn ? (
          <Link className="/login">Login</Link>
        ) : (
          <Link onClick={logout}>Logout</Link>
        )}
      </div>
      <img className="Logo" src={image} alt="Logo" />
    </nav>
  );
}
export default Nav;
