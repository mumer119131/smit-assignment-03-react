import React from 'react'
import './about.css'
import EMP1 from '../../assets/team1.jpg'
import EMP2 from '../../assets/team2.jpg'
import EMP3 from '../../assets/team3.jpg'
import EMP4 from '../../assets/team4.jpg'

const emp_data = [
  {
    id : '1',
    img : EMP1,
    emp_name : 'John Smith',
    job : 'CEO',
    detail : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem non itaque architecto sapiente dolore ea reprehenderit? Earum ullam ducimus possimus nostrum delectus sit, provident, sed magnam, dicta veritatis rem.'
  },
  {
    id : '2',
    img : EMP2,
    emp_name : 'Shames Lee',
    job : 'Co-Founder',
    detail : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem non itaque architecto sapiente dolore ea reprehenderit? Earum ullam ducimus possimus nostrum delectus sit, provident, sed magnam, dicta veritatis rem.'
  },
  {
    id : '3',
    img : EMP3,
    emp_name : 'Micheal James',
    job : 'Manager',
    detail : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem non itaque architecto sapiente dolore ea reprehenderit? Earum ullam ducimus possimus nostrum delectus sit, provident, sed magnam, dicta veritatis rem.'
  },
  {
    id : '4',
    img : EMP4,
    emp_name : 'John Doe',
    job : 'Narrator',
    detail : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem non itaque architecto sapiente dolore ea reprehenderit? Earum ullam ducimus possimus nostrum delectus sit, provident, sed magnam, dicta veritatis rem.'
  }
]

const About = () => {
  return (
    <div className='container about__container' id='about'>
      <h2>About</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt nihil omnis commodi. Itaque saepe excepturi eos exercitationem, pariatur sapiente, nesciunt impedit incidunt repellendus corporis possimus distinctio est fugiat, aliquid fuga facilis ipsum vitae labore nisi ducimus laboriosam! Assumenda repudiandae deserunt est modi atque incidunt quibusdam illo, asperiores in autem?</p>
      <div className="authors">
        {
          emp_data.map(({id,emp_name,img,job,detail}) =>{
            return (
              <article className="author" key={id}> 
                <img src={img} alt={emp_name} />
                <h2>{emp_name}</h2>
                <h5>{job}</h5>
                <small>{detail}</small>
                <button>Contact</button>
             </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default About