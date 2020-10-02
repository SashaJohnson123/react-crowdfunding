import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

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

  console.log(projectData);

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>{projectData.description}</h3>
      <h3>
        Created at:
        <Moment format="DD/MM/YYY">{projectData.created_date}</Moment>
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
    </div>
  );
}
export default ProjectPage;
