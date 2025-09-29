import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';

function Home() {
  return (
    <section id="home" className="parallax d-flex align-items-center" data-aos="fade-in">
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE COLUMN */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img 
              src="/Nitya.jpg" 
              alt="Nityasri" 
              className="profile-pic"
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="col-md-8 text-center text-md-start">
            <h1 className="display-4 fade-slide mb-3">Hi, I'm Nityasri</h1>
            
            <div className="typing-text fade-slide" style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}>
              <Typewriter
                options={{
                  strings: [
                    "Designing elegant frontends ⚛️",
                    "Building smart ML-powered solutions 🧠",
                    "Aspiring Full Stack Dev  ",
                    "Frontend Dev | ML Enthusiast 🚀"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30
                }}
              />
            </div>

            <a href="#contact" className="btn mt-4">Let's Connect</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
