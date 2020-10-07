import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Moment from "react-moment";
import "./ProjectPage.css";

function ProjectEditPage() {
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
      history.push(`/project/${id}`);
    });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          title: projectData.title,
        }),
      }
    );
    return response.json();
  };

  return (
    <div className="project-container">
      <div class="form-item">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
          value={projectData.title}
        />
      </div>
      <div>
        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter Project Details"
          onChange={handleChange}
          value={projectData.description}
        />
      </div>
      <p>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</p>
      <button type="Submit" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default ProjectEditPage;

// NEED TO DO:
// 1. Create new Edit Project page component
// 2. Add need route to App.js
// 3. Add link to createProject Page that links to new Edit Page component

// 4. Within edit project page component

// 4a)  State
// {
//   "id": 1,
//     "title": "Project Dog",
//   "description": "TEST: An enormous dust cloud has arisen as a result of nearby mining activities. Alarmingly, all wildlife and most importantly, numerous safe-haven protected dog shelters are at immediate risk!",
//   "goal": 600,
//   "is_open": false
// }

// 4b) useEfects that fetchs the project id and sets the State

// await fetch (....).then(response) {
//     setProjectEdit({
//         title: response.title,
//         description: response:description
//     })
// }

// 4c) In your return method, all inputs should ahve a devafult value
// <input value={projectEdit.title} onChange={handleOnChange} />

// 4d) A Save button that posts the data back to your endpoint and saves the new changes
// -- if save works (sucess) then redirect user back to /project/id
