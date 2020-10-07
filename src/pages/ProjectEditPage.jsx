import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Moment from "react-moment";
import "./ProjectPage.css";

function ProjectEditPage() {
  const [projectData, setProjectData] = useState({ pledge: [] });
  const { id } = useParams();

  const [credentials, editCredentials] = useState({
    id: 1,
    title: "Project Dog",
    description:
      "TEST: An enormous dust cloud has arisen as a result of nearby mining activities. Alarmingly, all wildlife and most importantly, numerous safe-haven protected dog shelters are at immediate risk!",
    goal: 500,
    is_open: true,
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    editCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/edit/${id}`)
      .then((results) => {
        return results.json();
        title.results.title,
        description.results.description,
        is_open.results.is_open,
      })
      .then((data) => {
        setProjectData(data);
        title.data.title,
        description.data.description,
        is_open.data.is_open,
      });
  }, []);

  return (
    <div className="project-container">
      <h2>{projectData.title}</h2>
      <h3>{projectData.description}</h3>
      <p>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</p>
      <Link to={`/project/edit/${projectData.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}

export default ProjectEditPage;

// NEED TO DO:
// 1. Add link to createProject Page that links to new Edit Page component;
// 2. In your return method, all inputs should have a default value;
// 3. A Save button that posts the data back to your endpoint and saves the new changes;
// 4. if save works (success) then redirect user back to /project/id

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
