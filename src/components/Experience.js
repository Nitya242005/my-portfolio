import React from 'react';
import '../App.css';

function Experience() {
  return (
    <section id="experience" className="py-5 text-light" data-aos="zoom-in-up">
      <div className="container">
        <h2 className="mb-4 text-center">💼 Experience</h2>

        <div className="card panel-glass p-4 shadow-sm">
          <h5 className="fw-bold mb-2">Internship Trainee</h5>
          <p className="mb-1"><strong>Company:</strong> IZEON INNOVATIVE PVT LTD</p>
          <p className="mb-0">
            Currently undergoing a comprehensive training program focused on both Web Development and Data Science.
            Gaining hands-on experience with HTML, CSS, Bootstrap, JavaScript on the frontend, and learning Machine Learning and Python fundamentals on the Data Science side.
          </p>
        </div>
        
        <div className="card panel-glass p-4 shadow-sm m-3">
          <h5 className="fw-bold mb-2">Intern</h5>
          <p className="mb-1"><strong>Company:</strong>Airport Authority of India Southern Region Head Quarters</p>
          <p className="mb-1"><strong>From:</strong>July 22 2025 - August 1 2025</p>
          <p className="mb-0">
           During my internship, I developed an IT Consumables Monitoring System to simplify and optimize the process of tracking, 
requesting, and managing IT consumables across departments. I collaborated with the project team to design and implement 
the system, ensuring improved efficiency and streamlined operations.</p> 
        </div>
        
      </div>
    </section>
  );
}

export default Experience;
