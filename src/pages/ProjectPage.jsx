import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Moment from "react-moment";
import Pledges from "../components/Pledges/Pledges";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledge: [] });
  const { id } = useParams();

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
    <div>
      <h2>{projectData.title}</h2>
      <h3>{projectData.description}</h3>
      {/* <h3>Created at: {projectData.date_created}</h3> */}
      <h3>
        Created at:
        <Moment format="DD/MM/YYYY">{projectData.created_date}</Moment>
      </h3>
      <h3>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledge.map((pledgeData, key) => {
          return (
            <li>
              ${pledgeData.amount} from {pledgeData.supporter_id}
            </li>
          );
        })}
      </ul>
      <Pledges projectData={projectData} />
    </div>
  );
}

export default ProjectPage;
