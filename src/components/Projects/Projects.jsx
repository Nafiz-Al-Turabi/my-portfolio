import React from 'react';
import ProjectCard from '../../Cards/ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto pt-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};

export default Projects;