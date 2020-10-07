import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Pledges({ projectData }) {
  // variables
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: false,
  });

  const history = useHistory();
  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledge((newPledge) => ({
      ...newPledge,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    pledge.project_id = projectData.id;
    console.log(pledge);
    debugger;
    // pledge.supporter_id = projectData.id;
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        ...pledge,
      }),
    });
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      postData()
        .then((response) => {
          history.push("/");
        })
        .catch((error) => console.log(error));
    }
  };
  //template
  return (
    <form className="PledgesForm">
      {/* <div>
        <label htmlFor="project_id"> Project:</label>
        <input
          type="number"
          id="project_id"
          placeholder="Enter title"
          onChange={handleChange}
        />
      </div> */}
      <div>
        <label htmlFor="amount"> Amount:</label>
        <input
          type="Number"
          id="amount"
          placeholder="Enter amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment"> Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter comment"
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <label htmlFor="supporter_id"> Supporter:</label>
        <input
          type="number"
          id="supporter_id"
          placeholder="Supporter ID"
          onChange={handleChange}
        />
      </div> */}
      <div>
        <label htmlFor="anonymous"> Anonymous</label>
        <input type="checkbox" id="anonymous" onClick={handleChange} />
      </div>
      <button className="PledgesButton" type="pledge" onClick={handleSubmit}>
        Pledge
      </button>
    </form>
  );
}

export default Pledges;
