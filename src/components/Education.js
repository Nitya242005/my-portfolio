import React from 'react';

function Education() {
  return (
    <section id="education" className="py-4">
      <div className="container text-center">
        <h2 className="section-title mb-3" data-aos="fade-up">Education</h2>
        <div
          className="d-flex align-items-center justify-content-center flex-column flex-md-row bg-light p-3 rounded"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://fsh.srmrmp.edu.in/wp-content/uploads/2023/04/fsh-logo-2023.png"
            alt="SRM Logo"
            className="srm-logo mb-2 mb-md-0 me-md-3"
            style={{ width: "80px", height: "auto" }}
          />
          <div className="text-start text-dark small">
            <h5 className="mb-1 fw-bold">SRM Institute of Science and Technology, Ramapuram</h5>
            <p className="mb-1"><strong>Degree:</strong> B.Tech in CSE (Big Data Analytics)</p>
            <p className="mb-0"><strong>CGPA:</strong> 9.97</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
