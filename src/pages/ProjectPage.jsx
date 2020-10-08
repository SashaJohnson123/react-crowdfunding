import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Moment from "react-moment";
import Pledges from "../components/Pledges/Pledges";
import "./ProjectPage.css";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledge: [] });
  // const [userId, setUserId] = useState(undefined);
  const { id } = useParams();

  // Hide the Edit/ Delete Buttons: projectData.can_edit

  // Ophelie code

  const onDeleteClick = () => {
    const shouldDelete = window.confirm(
      "Are you sure you'd like to delete this project?"
    );
    if (!shouldDelete) return; // if user clicks cancel
    // send delete request to API using fetch
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const headers = token ? { Authorization: `Token ${token}` } : {};
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, { headers })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });

    // // get list of users
    // fetch(`${process.env.REACT_APP_API_URL}users/`)
    //   .then((results) => {
    //     return results.json();
    //   })
    //   .then((data) => {
    //     const loggedInUser = data.filter(
    //       (user) => user.username === window.localStorage.getItem("userName")
    //     );
    //     setUserId(loggedInUser[0].id);
    //   });
  }, []);

  return (
    <div className="project-container">
      <h2>{projectData.title}</h2>
      <h3>{projectData.description}</h3>
      <h3>Target: ${projectData.goal}</h3>
      <p>
        Created at:
        <Moment format="  DD/MM/YYYY">{projectData.created_date}</Moment>
      </p>
      <p>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</p>
      {projectData.can_edit && (
        <div>
          <p>Pledges:</p>
          <ul>
            {projectData.pledge.map((pledgeData, key) => {
              return (
                <li key={key}>
                  ${pledgeData.amount} from{" "}
                  {pledgeData.anonymous ? "anonymous" : pledgeData.supporter_id}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Pledges projectData={projectData} />
      {projectData.can_edit && (
        <div>
          <Link to={`/project/edit/${projectData.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={onDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
