import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects, fetchProjects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const fetchedProjects = await fetchProjects();
        setProjectList(fetchedProjects.length > 0 ? fetchedProjects : projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setProjectList(projects); // Fallback to static projects
      } finally {
        setLoading(false);
      }
    };
    
    getProjects();
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {loading ? (
            <div style={{ textAlign: 'center', width: '100%', marginTop: '2rem' }}>Loading projects...</div>
          ) : (
            <>
              {toggle === 'all' && projectList
                .map((project) => (
                  <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
              {projectList
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
            </>
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects