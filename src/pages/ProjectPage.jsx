import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
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
      <p>
        Created at:
        <Moment format="  DD/MM/YYYY">{projectData.created_date}</Moment>
      </p>
      <p>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</p>
      <p>Pledges:</p>
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
      <Link to={`/project/edit/${projectData.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}

export default ProjectPage;
