import React from "react";

function Error404() {
  return (
    <div>
      <h1>
        Oops! This page does not exist. Please return back to the Home page.
      </h1>
      <a href="/Home" className="homeButton">
        Home
      </a>
    </div>
  );
}
export default Error404;
