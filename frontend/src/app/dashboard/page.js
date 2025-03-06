"use client";

import { useState } from "react";
import "./page.css"; // Import the styles

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  
  const projects = ["Sample 1", "Sample 2", "Sample 3", "Sample 4", "Sample 5"];
  const details = ["Details 1", "Details 2", "Details 3", "Details 4"];

  return (
    <div className="dashboard-container">
      {/* Left Panel: Scrollable Projects List */}
      <div className="projects-panel">
        <h2>Projects</h2>
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedDetail(null); // Reset right panel visibility
                }}
                className={`project-btn ${selectedProject === project ? "selected" : ""}`}
              >
                {project}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Panel: Always Visible */}
      <div className="details-panel">
        <h2>Details</h2>
        {selectedProject ? (
          <div>
            {details.map((detail, index) => (
              <button
                key={index}
                onClick={() => setSelectedDetail(detail)}
                className={`detail-btn ${selectedDetail === detail ? "selected" : ""}`}
              >
                {detail}
              </button>
            ))}
          </div>
        ) : (
          <p>Select a project to view details.</p>
        )}
      </div>

      {/* Right Panel: Initially Hidden, Appears When Detail is Selected */}
      {selectedDetail && (
  <div className="stages-panel">
    <h2>Stages</h2>
    <div className="stages-table-container"> {/* Ensure the table is directly below the title */}
      <table>
        <thead>
          <tr>
            <th>Stage 1</th>
            <th>Stage 2</th>
            <th>Stage 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

    </div>
  );
}
