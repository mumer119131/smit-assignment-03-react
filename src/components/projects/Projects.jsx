import React from 'react'
import './project.css'
import HOUSE2 from '../../assets/house2.jpg'
import HOUSE3 from '../../assets/house3.jpg'
import HOUSE4 from '../../assets/house4.jpg'
import HOUSE5 from '../../assets/house5.jpg'

const project_data = [
  {
    id : '1',
    img : HOUSE2,
    title : 'Summer House',
  },
  {
    id : '2',
    img : HOUSE3,
    title : 'Winter House',
  },
  {
    id : '3',
    img : HOUSE4,
    title : 'Spring House',
  },
  {
    id : '4',
    img : HOUSE5,
    title : 'Summer House',
  },
  {
    id : '5',
    img : HOUSE5,
    title : 'Summer House',
  },
  {
    id : '6',
    img : HOUSE4,
    title : 'Winter House',
  },
  {
    id : '7',
    img : HOUSE3,
    title : 'Spring House',
  },
  {
    id : '8',
    img : HOUSE2,
    title : 'Summer House',
  }
]

const Projects = () => {
  return (
    <div className='container projects__container' id='projects'>
      <h2>Projects</h2>
      <hr />
      <div className="projects">
        {
          project_data.map(({id,img,title}) => {
            return (
          <article className="project" key={id}>
            <img src={img} alt="" />
            <h5>{title}</h5>
          </article>
            );
          })


        }
      </div>
    </div>
  )
}

export default Projects