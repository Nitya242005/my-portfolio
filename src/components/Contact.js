import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 text-light" data-aos="zoom-in-up">
  <div className="container">
    <h2 className="mb-5 text-center neon-text">Links</h2>

    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card panel-glass p-4 text-center bg-dark text-light shadow-lg">
          <div className="mb-4">
            <h5><strong>Email:</strong></h5>
            <a href="mailto:yashuqueen24@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">
              Send Email
            </a>
          </div>
          <div className="mb-4">
            <h5><strong>LinkedIn:</strong></h5>
            <a href="https://www.linkedin.com/in/a-nityasri-b92256294/" className="btn" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </div>
          <div>
            <h5><strong>GitHub:</strong></h5>
            <a href="https://github.com/Nitya242005" className="btn" target="_blank" rel="noopener noreferrer">
              Check
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
