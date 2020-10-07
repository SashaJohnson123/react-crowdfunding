import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Moment from "react-moment";
import Pledges from "../components/Pledges/Pledges";
import "./ProjectPage.css";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledge: [] });
  const { id } = useParams();

  const onDeleteClick = () => {
    const shouldDelete = window.confirm(
      "Are you sure you'd like to delete this project?"
    );
    if (!shouldDelete) return; // if user clicks cancel
    // send delete request to API using fetch
  };

  const onEditClick = () => {
    const shouldEdit = window.confirm(
      "Are you sure you'd like to edit this project?"
    );
    if (!shouldEdit) return; // if user clicks cancel
    // send edit request to API using fetch
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

  return (
    <div className="project-container">
      <h2>{projectData.title}</h2>
      <h3>{projectData.description}</h3>
      <h4>
        Created at:
        <Moment format="  DD/MM/YYYY">{projectData.created_date}</Moment>
      </h4>
      <h5>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</h5>
      <h6>Pledges:</h6>
      <ul>
        {projectData.pledge.map((pledgeData, key) => {
          return (
            <li>
              ${pledgeData.amount} from{" "}
              {pledgeData.anonymous ? "anonymous" : pledgeData.supporter_id}
            </li>
          );
        })}
      </ul>
      <Pledges projectData={projectData} />
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}

export default ProjectPage;
