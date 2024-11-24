import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
const ProjectDetail = () => {
    const { id } = useParams();
  
    const project = data.charities.find((charity) => charity.id === parseInt(id));
  
    if (!project) {
      return <p>Dự án không tồn tại.</p>;
    }
  
    return (
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>Tiêu đề: {project.title}</p>
      </div>
    );
  };
  
  export default ProjectDetail;
  