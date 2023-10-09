import React from 'react';
import './Skills.css'; // Import your CSS file with the styles

import {skills} from '../../data/constants.js'; // Corrected import

const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="desc">
          Here are some of my skills on which I have been working on for the past few months.
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img src={item.image} alt={item.name} className="skill-image" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;