// src/components/Skills.js
import React from 'react';
import SkillPieChart from './SkillPieChart';

import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython
} from 'react-icons/fa';
import {
  SiCplusplus, SiDjango, SiTensorflow, SiScikitlearn
} from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={30} className="skills-icon" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={30} className="skills-icon" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={30} className="skills-icon" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={30} className="skills-icon" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" size={30} className="skills-icon" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" size={30} className="skills-icon" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" size={30} className="skills-icon" /> },
    { name: 'Django', icon: <SiDjango color="#092E20" size={30} className="skills-icon" /> },
    { name: 'Machine Learning', icon: <SiScikitlearn color="#F7931E" size={30} className="skills-icon" /> },
    { name: 'Deep Learning', icon: <SiTensorflow color="#FF6F00" size={30} className="skills-icon" /> },
  ];

  return (
    <section id="skills" className="py-5 text-dark" data-aos="zoom-in">
      <div className="container">
        <h2 className="mb-4 text-center text-light">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, idx) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4 text-center" key={idx}>
              <div className="p-3 border rounded shadow-sm bg-white d-flex flex-column align-items-center">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart Section */}
        <div className="mt-5">
          <SkillPieChart />
        </div>
      </div>
    </section>
  );
}

export default Skills;
