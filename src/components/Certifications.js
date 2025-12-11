import React from 'react';

const certifications = [
  {
    name: "30 Days DSA Bootcamp - Unstop",
    companyLogo: "https://digitomize.com/assets/unstop-5291dc29.png",
    review: "Sharpened my DSA skills through daily practice and structured roadmap.",
    takeaways: [
      "Mastered recursion, dynamic programming, and backtracking",
      "Solved 100+ problems on Leetcode",
      "Strengthened problem-solving approach and optimization"
    ],
    link: "https://drive.google.com/file/d/1Y9MA8e1W3ql2eME2GwccNFSxKJQODX6t/view"
  },
  {
    name: "SQL Fundamentals to Advanced - Udemy",
    companyLogo: "https://freelogopng.com/images/all_img/1683006968udemy-icon-png.png",
    review: "Built a strong foundation in SQL from basics to advanced analytics.",
    takeaways: [
      "Learned real-world SQL queries and joins",
      "Mastered indexes, subqueries, and optimization",
      "Applied SQL for ML data cleaning and reporting"
    ],
    link: "https://www.udemy.com/certificate/UC-fb460a69-e5e1-4c82-a0a4-e9a317f401e1/"
  },
  {
    name: "Frontend Developer Internship - Izeon Innovative pvt ltd",
    companyLogo: "https://www.izeoninnovative.com/assets/images/white-logo.png",
    review: "Worked on live frontend projects and built UIs with real-world expectations.",
    takeaways: [
      "Strengthened HTML, CSS, JS and Bootstrap",
      "Built responsive layouts using Flexbox and Grid",
      "Gained Git workflow experience and team collaboration"
    ],
    link: "https://drive.google.com/file/d/1ABoNqKOq6N69W_8AJbaFQakPUwFSq5g7/view"
  },
  {
  name: "Problem Solving - HackerRank",
  companyLogo: "https://cdn.dribbble.com/users/1771471/screenshots/14108349/media/0d446f06dbc6f204fdcb138902df65c9.gif",
  review: "Improved my logical thinking and problem-solving through coding challenges.",
  takeaways: [
    "Practiced key programming concepts and logic building",
    "Solved real-world coding problems using C++ and Python",
    "Learned how to break down problems into smaller steps"
  ],
  link: "https://www.hackerrank.com/certificates/6a1789c0dd24"
},
{
  name: "Big Data Computing - NPTEL",
  companyLogo: "https://edutinker.com/wp-content/uploads/2023/04/NPTEL-A-complete-Guide.png",
  review: "Gained a strong understanding of big data ecosystems, distributed processing, and real-world data engineering workflows.",
  takeaways: [
    "Learned core concepts of Big Data, Hadoop, HDFS, and MapReduce",
    "Understood how distributed computing handles large-scale datasets",
    "Explored Apache Spark architecture and performed RDD/DataFrame operations",
    "Studied NoSQL databases like HBase and Cassandra",
    "Worked on hands-on programming assignments related to large-scale data processing"
  ],
  link: "https://drive.google.com/file/d/1Ia4Alyv6THHdCTG0xREmTWveicojzDLw/view?usp=sharing"
},
{
  name: "Machine Learning Internship - Izeon Innovative",
  companyLogo: "https://www.izeoninnovative.com/assets/images/white-logo.png",
  review: "Completed a 1-month internship focused on applying machine learning techniques to real-world datasets and building practical ML models.",
  takeaways: [
    "Hands-on experience with data preprocessing, feature engineering, and exploratory data analysis",
    "Built ML models such as Logistic Regression, Decision Trees, Random Forest, and SVM",
    "Worked on supervised and unsupervised learning techniques",
    "Learned model evaluation methods like accuracy, precision, recall, and confusion matrix",
    "Gained practical exposure to Python libraries like NumPy, Pandas, Matplotlib, and Scikit-learn"
  ],
  link: "https://drive.google.com/file/d/1Fg6yy6rxBKb5OaZpb3JF5i2j__ogHimM/view?usp=drive_link"
}


];

function Certifications() {
  return (
    <section className="certification-page py-5">
      <div className="container">
        <h2 className="text-center mb-5 glow-title">🎓 My Certifications</h2>
        <div className="row">
          {certifications.map((cert, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="glass-card">
                <img src={cert.companyLogo} alt="Logo" className="cert-logo mb-3" />
                <h4>{cert.name}</h4>
                <p className="review">{cert.review}</p>
                <ul className="takeaways">
                  {cert.takeaways.map((point, i) => (
                    <li key={i}>🧠 {point}</li>
                  ))}
                </ul>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-glass mt-3">View Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
