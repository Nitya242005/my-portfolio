import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css'; // Ensure your glassy styles are here

function About() {
  return (
    <section id="about" className="py-5 text-light" data-aos="fade-right">
      <div className="container">
        <h2 className="mb-4 text-center">💁‍♀️ About Me</h2>
        <div className="card panel-glass p-4">
          <p className="lead text-center">
            <Typewriter
              options={{
                strings: [
                  "I'm a Computer Science student specializing in Big Data Analytics at SRM IST Ramapuram.",
                  "I'm passionate about Frontend Development, Machine Learning, and Deep Learning.",
                  "I love designing beautiful interfaces and building intelligent applications.",
                  "I aim to solve real-world problems by blending design, code, and AI."
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

