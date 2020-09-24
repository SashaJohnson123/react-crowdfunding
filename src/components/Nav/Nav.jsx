import React from "react";
import { Link } from "react-router-dom";
function Nav(props) {
    const { image } = props;
    return (
        <div>
            <img className="Logo" src={image} alt="Logo"/>
        </div>
        <div className="Menu">
            <Link to="/">Home</Link>
        </div>
    );
}
export default Nav;