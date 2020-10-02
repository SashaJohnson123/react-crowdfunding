import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateProjectForm() {
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    date_created: "",
    is_open: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    console.log(credentials);
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        ...credentials,
        date_created: new Date(credentials.date_created).toISOString,
      }),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    if (true) {
      postData().then((response) => {
        console.log(response);
        // window.localStorage.setItem("token", response.token);
        history.push("/");
      });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Project Title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter Project Details"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category"> Category:</label>
        <input
          type="text"
          id="category"
          placeholder="Enter Project Category"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="is_open"> Project Open:</label>
        <input
          type="boolean"
          id="is_open"
          placeholder="Project is Open"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date"> Date:</label>
        <input
          type="date"
          id="date_created"
          placeholder="date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal"> Goal:</label>
        <input
          type="Number"
          id="goal"
          placeholder="Enter Target Amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image"> Image:</label>
        <input type="url" id="image" onChange={handleChange} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Create Project
      </button>
    </form>
  );
}

export default CreateProjectForm;
