import { prettyDOM } from "@testing-library/react";
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectItems = projects.map(proj => {
    return (
      <ProjectItem name={proj.name} about={proj.about} technologies={proj.technologies} key={proj.name}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectItems}
      </div>
    </div>
  );
}

export default ProjectList;
