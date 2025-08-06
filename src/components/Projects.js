import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Diabetes Prediction',
      desc: 'Diabetes Prediction using Xgboost Model Integrated with Django',
      github: 'https://github.com/Nitya242005/Diabetes-Prediction.git',
      demo:'https://github.com/Nitya242005/Diabetes-Prediction.git'
    },
    {
      title: 'E-Commerce Website',
      desc: 'Frontend Beauty Product website using HTML,CSS,Javascript and Bootstrap.',
      github: 'https://github.com/Nitya242005/GlowCart.git',
      demo:'https://lovely-meerkat-fbcc4b.netlify.app/' // replace with your actual live link
    },
    {
      title: 'TextUtils Website',
      desc: 'TextUtils- add text and do wonderful transformations you prefer',
      github: 'https://github.com/Nitya242005/textutils.git',
      demo:'https://textutils-git-main-nitya242005s-projects.vercel.app/' // replace with your actual live link
    },
     {
      title: 'Calculator',
      desc: 'Perform Mathematical calculations',
      github: 'https://github.com/Nitya242005/Calculator.git',
      demo:'https://nitya242005.github.io/Calculator/' // replace with your actual live link
    }


  ];

  return (
    <section id="projects" className="py-5 text-light" data-aos="fade-left">
      <div className="container">
        <h2 className="mb-5 text-center">Projects</h2>
        <div className="row">
          {projects.map((proj, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 p-4 text-center">
                <h5 className="card-title mb-2">{proj.title}</h5>
                <p className="card-text">{proj.desc}</p>
                <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                  <a href={proj.github} className="btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={proj.demo} className="btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
