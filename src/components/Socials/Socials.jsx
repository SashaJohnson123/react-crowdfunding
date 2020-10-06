import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Socials {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, [location]);


  const { image } = props;
  return (
    <nav>
      <div className="Menu">
      <h1>LinkedIn</h1>
      <img src="linkedin.png" alt=LinkedIn.">
      <p>URL: linkedin.com/ecoocean</p>
      <h2>Instagram</h2>
      <img src="instagram.png" alt=Instagram.">
      <p>IG handle: ecoocean</p>
      </div>
    </nav>
  );
}
export default Socials;


<Navbar fixed="bottom" />

