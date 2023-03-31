import React from 'react';
import './style.css';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'

function Project() {
  return (
    <section>
      <h2>Projects:</h2>
      <h4>Text Editor</h4>
      <img className="img" src={project1} alt="project" width="300" height="200"></img><br />
      <a href="https://aqueous-anchorage-39063.herokuapp.com/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Text-Editor" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
      <h4>Social Movie Media</h4>
      <img className="img" src={project2} alt="project" width="300" height="200"></img><br />
      <a href="https://mighty-plains-34884.herokuapp.com/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Social-Movie-Media" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
      <h4>Note Taker</h4>
      <img className="img" src={project3} alt="project" width="300" height="200"></img><br />
      <a href="https://whispering-cliffs-12933.herokuapp.com/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Note-Taker" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
      <h4>Pupify</h4>
      <img className="img" src={project4} alt="project" width="300" height="200"></img><br />
      <a href="https://mattoz.github.io/Pupify/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Pupify" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
      <h4>Weather Dashboard</h4>
      <img className="img" src={project5} alt="project" width="300" height="200"></img><br />
      <a href="https://hbarry89.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Weather-Dashboard" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
      <h4>Work Day Scheduler</h4>
      <img className="img" src={project6} alt="project" width="300" height="200"></img><br />
      <a href="https://hbarry89.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Live Link</a> | <a href="https://github.com/hbarry89/Work-Day-Scheduler" target="_blank" rel="noreferrer">Repository</a><br />
      <br />
    </section>
  );
}

export default Project;