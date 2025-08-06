const responseData = [
   {
    keywords: ['how did you start', 'web development journey', 'begin frontend', 'how you began'],
    answer: "I began learning frontend with YouTube channels like CodeWithHarry and Error Makes Clever. Later, I joined Izeon Innovative for structured training and hands-on practice with real projects."
  },
  {
    keywords: ['what is glowcart', 'beauty product website', 'glowcart project'],
    answer: "GlowCart is a frontend e-commerce website for beauty products. I built it using HTML, CSS, JavaScript, and Bootstrap, focusing on UI/UX and responsiveness."
  },
  {
    keywords: ['how do you practice', 'learning style', 'how you learn', 'project-based learning'],
    answer: "I believe in learning through projects. I regularly build websites, debug styles, and fix issues. React tutorials and constant project-building sharpened my skills."
  },
  {
    keywords: ['how to manage time', 'learn effectively', 'practice consistently'],
    answer: "The key is using your time wisely. I break learning into chunks and stay consistent. Even small practice sessions add up to major improvements."
  },
  {
    keywords: ['diabetes project', 'xgboost model', 'ml django integration'],
    answer: "My Diabetes Prediction project uses an XGBoost model, saved after training, and integrated with a Django backend. It takes user health inputs and returns real-time predictions."
  },
  {
    keywords: ['mentor support', 'izeon mentor', 'guidance', 'daily practice'],
    answer: "Yes, we had a mentor guiding us every day. He gave us tasks, solved doubts, and helped us stay on track, which improved our learning drastically."
  },
  {
    keywords: ['importance of focus', 'small errors', 'debugging mindset'],
    answer: "Focus is everything in development. A missed comma or wrong tag can break everything. I stay attentive to every little detail to avoid bugs early."
  },
  {
    keywords: ['how do you design', 'inspiration for ui', 'style debugging'],
    answer: "I use a trial-and-error method. I look at existing sites in a similar category, take UI inspiration, and keep tweaking until it looks good and works well."
  },
  {
    keywords: ['never give up', 'how to stay motivated', 'debug until solved'],
    answer: "I never give up till I solve the issue. Even during short breaks, I think about how to fix bugs. This mindset keeps me improving continuously."
  },
  {
    keywords: ['html expertise', 'learn html', 'structure website'],
    answer: "Start HTML with basic tags, then move to forms and semantic elements. Build small websites to get the hang of layout and accessibility best practices."
  },
  {
    keywords: ['css mastery', 'learn css', 'css animations'],
    answer: "CSS is powerful! Understand the box model, Flexbox, Grid, transitions, and animations. Practice styling from scratch and replicate real UIs to master it."
  },
  {
    keywords: ['javascript learning', 'get better at js', 'dom manipulation'],
    answer: "I started with JS basics—variables, loops, DOM. Then moved to ES6, APIs, and projects. A calculator or to-do app is a great start for JS learners."
  },
  {
    keywords: ['bootstrap usage', 'how to use bootstrap', 'frontend layout'],
    answer: "Bootstrap helped me quickly structure pages using its grid system and prebuilt components. I used it in GlowCart and my portfolio for responsiveness."
  },
  {
    keywords: ['react learning', 'react journey', 'how you learned react'],
    answer: "I learned React by building mini apps alongside tutorials—weather app, text editor, portfolio. Understanding props, state, and hooks was game-changing."
  },
  {
    keywords: ['python learning', 'how you use python', 'python ml projects'],
    answer: "Python is my core language for ML. I use it for data preprocessing, training models with pandas and scikit-learn, and backend logic in Django apps."
  },
  {
    keywords: ['c++ basics', 'cpp learning', 'c++ projects'],
    answer: "C++ helped me with logic building. I practiced OOP, arrays, and built CLI games. I also solved problems on LeetCode to improve DSA skills."
  },
  {
    keywords: ['django integration', 'learn django', 'web backend'],
    answer: "Django gave me the power to build full web apps. I practiced views, models, and connected ML models to forms using HTML templates."
  },
  {
    keywords: ['ml basics', 'start machine learning', 'first ml project'],
    answer: "I started ML with Python and scikit-learn. My first real project was Diabetes Prediction. I learned feature engineering, model tuning, and deployment."
  },
  {
    keywords: ['deep learning', 'neural networks', 'learn tensorflow'],
    answer: "I started deep learning with TensorFlow. Learned layers, activation functions, and built image classification models like MNIST digit recognition."
  },
  {
    keywords: ['sql learning', 'database querying', 'backend integration'],
    answer: "I learned SQL from a Udemy course and used it in Django to manage databases. I practiced joins, filtering, and real-world query optimization."
  },
  {
  keywords: ["what is glassmorphism", "portfolio theme", "design style"],
  answer:
    "Glassmorphism is a modern UI trend with frosted-glass effects, blur, and translucency. My portfolio uses this style in black-pink to give it a sleek, futuristic look with depth and softness.",
},
{
  keywords: ["how many projects", "projects done", "personal projects"],
  answer:
    "I've completed over 4 strong projects: GlowCart (E-commerce), Diabetes Predictor (ML + Django), TextUtils (React Text Tool), and a Calculator app. Each project helped me master a key skill.",
},
{
  keywords: ["glowcart features", "what is glowcart", "beauty shopping site"],
  answer:
    "GlowCart is a frontend beauty product e-commerce site. It includes responsive pages, product cards, and smooth UI made with HTML, CSS, JavaScript, and Bootstrap.",
},
{
  keywords: ["calculator project", "math app", "calculation project"],
  answer:
    "My calculator project performs basic math operations. It's built with HTML, CSS, and JavaScript. A great project to practice JS event handling and DOM updates.",
},
{
  keywords: ["textutils features", "text manipulation", "react text app"],
  answer:
    "TextUtils allows users to manipulate text: convert to uppercase/lowercase, count words/characters, remove spaces, and estimate reading time — all built using React.",
},
{
  keywords: ["diabetes prediction steps", "ml pipeline", "model deployment"],
  answer:
    "Steps in my Diabetes ML project: 1) data cleaning, 2) feature analysis, 3) XGBoost model training, 4) model saving with joblib, 5) backend with Django, 6) frontend with input form and results.",
},
{
  keywords: ["xgboost why", "model choice", "why xgboost"],
  answer:
    "I chose XGBoost for its high accuracy, speed, and ability to handle imbalanced data well. It's one of the top-performing algorithms in many Kaggle competitions.",
},
{
  keywords: ["figma use", "design figma", "convert figma to code"],
  answer:
    "I use Figma designs to understand layout and color ideas, then convert them to code using HTML, CSS, and Bootstrap. It helps in making pixel-perfect responsive websites.",
},
{
  keywords: ["bootstrap navbar", "how to use bootstrap", "bootstrap grid"],
  answer:
    "Bootstrap makes web design easy. I use its grid system, navbar, buttons, cards, and spacing utilities to speed up frontend layout. Great for responsiveness.",
},
{
  keywords: ["css hover effect", "css transitions", "animations"],
  answer:
    "I add hover effects and animations using CSS transitions and keyframes. For example, buttons grow slightly or change color on hover for better UX.",
},
{
  keywords: ["error makes clever", "youtube channel", "how i started frontend"],
  answer:
    "I followed Error Makes Clever and CodeWithHarry to learn HTML, CSS, and JavaScript. These channels gave me a strong base through hands-on demos.",
},
{
  keywords: ["codewithharry frontend", "html tutorial", "css beginner"],
  answer:
    "CodeWithHarry taught me how to structure websites, style with CSS, and use JavaScript for logic. His beginner to advanced series helped me a lot.",
},
{
  keywords: ["izeon innovative", "web development training", "internship"],
  answer:
    "I joined Izeon Innovative for hands-on web development + data science training. We practiced daily, built real projects, and got constant mentoring.",
},
{
  keywords: ["what did you learn from internship", "frontend experience"],
  answer:
    "During my internship at Izeon, I improved my HTML, CSS, JS, and Bootstrap skills. I also learned Git, responsive design, and real-world UI expectations.",
},
{
  keywords: ["how to practice projects", "build projects", "learn by building"],
  answer:
    "I believe in project-based learning. I regularly build apps — even small ones — to test my skills. Every bug I fix teaches me something new!",
},
{
  keywords: ["how to debug errors", "solve bugs", "fix styling issues"],
  answer:
    "I debug by checking the console, using DevTools to inspect elements, and comparing with similar websites. Trial and error + reading docs helps a lot.",
},
{
  keywords: ["what inspires you", "motivation", "what keeps you going"],
  answer:
    "Focus and persistence. I never give up until I complete the project. Even during breaks, I think about how to fix bugs or improve designs.",
},
{
  keywords: ["learn react from scratch", "react learning", "how i learned react"],
  answer:
    "I learned React by following YouTube tutorials and building side-by-side. I practiced concepts like useState/useEffect, routing, and components regularly.",
},
{
  keywords: ["react project idea", "simple react projects", "build with react"],
  answer:
    "Start React with projects like a to-do list, weather app, or a portfolio. These help learn props, state, events, and React Router effectively.",
},
{
  keywords: ["best frontend tips", "frontend roadmap", "how to get good at frontend"],
  answer:
    "Understand design-to-code, learn responsive layouts, use dev tools often, and build UI clones. Focus on both logic (JS) and visuals (CSS).",
},
  {
    keywords: ["what is your react learning journey", "how did you learn react"],
    answer:
      "I learned React by combining YouTube tutorials with real-time projects. While watching tutorials, I simultaneously built apps like TextUtils and a weather app to reinforce concepts like state, props, and hooks.",
  },
  {
    keywords: ["projects in react", "react project ideas"],
    answer:
      "I built React projects like TextUtils, a dynamic text transformer, and I'm working on a weather app. Other great beginner-friendly ideas include a to-do list, blog UI, or portfolio site with React Router.",
  },
  {
    keywords: ["why did you choose xgboost", "xgboost in diabetes project"],
    answer:
      "I chose XGBoost for the Diabetes Prediction project because it handles missing data well, is fast, and offers excellent accuracy with tabular health data.",
  },
  {
    keywords: ["frontend journey", "how did you become good at frontend"],
    answer:
      "I started with Code With Harry and Error Makes Clever on YouTube, then joined Izeon Innovative for hands-on frontend training. I practiced daily, built projects, debugged layouts, and understood how to create responsive UIs.",
  },
  {
    keywords: ["beauty product website", "glowcart", "ecommerce site"],
    answer:
      "GlowCart is a frontend-only e-commerce website I built using HTML, CSS, JavaScript, and Bootstrap. It features modern layout, product sections, and good responsiveness.",
  },
  {
    keywords: ["importance of debugging", "how do you debug your projects"],
    answer:
      "I debug using browser dev tools and console.log. I inspect element styles, trace issues to logic or syntax, and go line-by-line. Debugging helps me learn more than tutorials ever can.",
  },
  {
    keywords: ["where did you train", "who was your mentor"],
    answer:
      "I got mentored through Izeon Innovative, where we had daily online sessions. My mentor provided hands-on tasks and explained each concept practically, which built strong fundamentals.",
  },
  {
    keywords: ["how to stay consistent", "daily practice motivation"],
    answer:
      "Consistency comes from passion. I practice daily and even during breaks I think about bugs, layouts, or improvements. This curiosity helps me stay in flow and grow.",
  },
  {
    keywords: ["why practice is important", "how do you practice"],
    answer:
      "Practice helps convert knowledge into skill. I regularly build mini-projects, solve real bugs, and experiment with styles. Projects are the best way to learn tech deeply.",
  },
  {
    keywords: ["why never give up", "overcome bugs"],
    answer:
      "I never give up until a project is complete. If I get stuck, I research, test multiple fixes, look into similar projects, and apply the trial-and-error approach until it works.",
  },
  {
    keywords: ["how do you design websites", "how do you get UI ideas"],
    answer:
      "I take UI inspiration from real websites and design platforms like Dribbble. I then implement the styles using HTML, CSS, and Bootstrap, modifying them to suit my layout and theme.",
  },
  {
    keywords: ["focus while coding", "why is focus important in projects"],
    answer:
      "Focus is essential because a small mistake, like a missing comma or typo, can break your entire layout or logic. I double-check each step, especially while working with forms or routing.",
  },
  {
    keywords: ["what is your learning strategy", "learning habit"],
    answer:
      "I follow a learn-apply-repeat strategy. First, I understand the concept through video tutorials, then immediately apply it in a small project. This helps cement knowledge and gain practical confidence.",
  },
  {
    keywords: ["collaboration", "team work experience"],
    answer:
      "Through my internship, I collaborated with a frontend team where we followed Git workflows, resolved merge conflicts, and worked on shared components. This improved my communication and code discipline.",
  },
  {
    keywords: ["git experience", "how do you use version control"],
    answer:
      "I use Git for all my projects. I create branches, push commits, resolve merge issues, and use GitHub to collaborate or deploy. Git is essential for tracking changes and teamwork.",
  },
  {
    keywords: ["bootstrap usage", "how do you use bootstrap"],
    answer:
      "I use Bootstrap’s grid system, utility classes, buttons, and modals to quickly build responsive layouts. It helps me save time while maintaining a clean UI.",
  },
  {
    keywords: ["dsa preparation", "dsa bootcamp experience"],
    answer:
      "I completed the 30-Day DSA Bootcamp on Unstop, where I practiced recursion, dynamic programming, and solved over 100 problems on Leetcode, enhancing my problem-solving skills.",
  },
  {
    keywords: ["sql learning", "sql certificate"],
    answer:
      "I learned SQL through a Udemy course. I practiced real queries, joins, subqueries, and used SQL for data analysis and ML pipelines. The certificate strengthened my backend integration skills.",
  },
  {
    keywords: ["izeon internship", "frontend internship experience"],
    answer:
      "At Izeon Innovative, I worked on live frontend tasks using HTML, CSS, JS, and Bootstrap. I learned responsive layout building, git collaboration, and professional coding standards.",
  },
  {
    keywords: ["problem solving", "hackerrank certificate"],
    answer:
      "HackerRank’s Problem Solving certification helped me enhance logic building. I practiced C++ and Python problems, broke down tasks step-by-step, and built solid coding habits.",
  },
  {
  keywords: ["should i learn react before django", "react or django first"],
  answer:
    "Learn React first if you’re more into frontend design and interactivity. Learn Django first if you want to understand backend logic and database handling. Eventually, full-stack developers need both!",
},
{
  keywords: ["best way to debug", "how do you debug", "debugging technique"],
  answer:
    "I debug by checking one module at a time, using browser dev tools, and reading console logs carefully. If stuck, I Google, check similar websites, and never hesitate to test multiple solutions until it works.",
},
{
  keywords: ["project based learning", "is it better to do projects"],
  answer:
    "Yes! Project-based learning helps solidify concepts. I’ve learned HTML, CSS, JS, and even Django better through hands-on projects rather than just watching tutorials.",
},
{
  keywords: ["what is glowcart", "glowcart project"],
  answer:
    "GlowCart is a beauty product website I built using HTML, CSS, JavaScript, and Bootstrap. It taught me layout structure, design consistency, and real user interface creation.",
},
{
  keywords: ["is xgboost good for prediction", "xgboost for diabetes"],
  answer:
    "XGBoost is great for structured data problems. I used it in my Diabetes Prediction project as it gave higher accuracy and handled missing data well.",
},
{
  keywords: ["how did you get better at css", "css practice ideas"],
  answer:
    "I improved in CSS by replicating websites, using Flexbox and Grid layouts, styling components repeatedly, and analyzing UI inspirations from Figma and Dribbble.",
},
{
  keywords: ["can i become frontend developer from youtube", "youtube tutorials"],
  answer:
    "Yes! I started from YouTube channels like CodeWithHarry and ErrorMakesClever. They give hands-on knowledge, but consistent practice and project-building matter more.",
},
{
  keywords: ["how to stay consistent", "how to not give up in coding"],
  answer:
    "I stay consistent by setting daily learning goals, maintaining momentum with small wins, and never giving up—especially when bugs come up. Breaks help, but focus brings results.",
},
{
  keywords: ["tips to complete a project", "project completion motivation"],
  answer:
    "Break your project into steps. Don’t aim for perfection on day one. Tackle UI first, then functionality. Keep testing and don’t let bugs stop you. It’s okay to ask for help too!",
},
{
  keywords: ["how to learn bootstrap quickly", "bootstrap tips"],
  answer:
    "Start with the grid system and spacing utilities. Practice navbar, modals, and cards. Use Bootstrap's docs and build mini pages. Soon, it’ll be like muscle memory.",
},
{
  keywords: ["how did you build portfolio", "your portfolio"],
  answer:
    "My portfolio is built using React and Bootstrap, styled with glassmorphism and animated using AOS. It shows my skills, projects, certifications, and includes an interactive AI avatar.",
},
{
  keywords: ["are certifications useful", "do i need certificates"],
  answer:
    "Certifications help validate your learning and look good on resumes. I’ve done SQL (Udemy), DSA (Unstop), and Problem Solving (HackerRank) to strengthen my credibility.",
},
{
  keywords: ["how to use git", "git in projects"],
  answer:
    "I use Git to track project changes, experiment with features using branches, and collaborate easily. GitHub hosts my code and shows my contributions clearly.",
},
{
  keywords: ["how do you prepare for interviews", "interview preparation tips"],
  answer:
    "I focus on DSA, frontend questions, and projects. I explain my work clearly. Certifications and real project explanations give me an edge.",
},
{
  keywords: ["how do you plan your time", "time management tips for students"],
  answer:
    "I plan based on tasks—1 hour learning, 2 hours practice. I use breaks to think through bugs or next steps. I keep deadlines flexible but goals clear.",
},
{
  keywords: ["what's your strongest skill", "strongest area in development"],
  answer:
    "My strongest area is frontend development. I’m confident in HTML, CSS, JS, and React. I enjoy designing responsive UIs and turning ideas into interactive interfaces.",
},
{
  keywords: ["what's the biggest challenge in web dev"],
  answer:
    "Biggest challenge? Debugging! Sometimes a small semicolon or extra div breaks everything. But solving it is also the best feeling ever.",
},
{
  keywords: ["how did mentor help", "importance of mentorship"],
  answer:
    "Mentorship made a huge difference. I got feedback, regular tasks, and someone to guide when stuck. It kept my learning consistent and productive.",
},
{
  keywords: ["should i start with python or c++", "python or c++ first"],
  answer:
    "Start with Python for ease and ML. Choose C++ if your focus is DSA and competitive coding. I used C++ for problem-solving and Python for ML projects.",
},
{
  keywords: ["how do you practice daily", "daily routine coding"],
  answer:
    "I start with bug fixes or small tasks from the previous day. Then I explore tutorials, build features, and reflect on what I learned. Even 2 hours a day is enough if focused.",
},
  {
    keywords: ["difference between react and js", "react vs javascript"],
    answer:
      "JavaScript is the foundation, but React is a library built on top of it to build UI efficiently. With React, we manage states, reuse components, and handle complex DOM updates easily."
  },
  {
    keywords: ["figma to code", "design to frontend"],
    answer:
      "I analyze Figma designs, break them into sections, and map each part to HTML structure. Then I style it using CSS Grid/Flex and ensure responsiveness. It trains visual design + coding skills."
  },
  {
    keywords: ["how do you debug", "fixing errors"],
    answer:
      "I use browser DevTools, console.log, and trace step-by-step where the issue occurs. I compare with working code and try small changes. Practice has improved my bug-hunting skills."
  },
  {
    keywords: ["hackathon", "hack the horizon"],
    answer:
      "I participated in Hack the Horizon 2.0 under AI/ML track. I focused on unique ideas like action-to-speech and smart assistants using AI to solve real-world problems."
  },
  {
    keywords: ["soft skills", "communication", "team work"],
    answer:
      "During training, I learned to present my projects, explain logic, work with a mentor, and complete tasks under deadlines. These experiences built confidence and clarity."
  },
  {
    keywords: ["how do you handle errors", "fix bugs"],
    answer:
      "I never panic. I analyze the bug logically, test different cases, use trial-and-error, and learn from solutions online. Over time, I’ve developed a calm and structured approach to debugging."
  },
  {
    keywords: ["bootstrap vs custom css", "which is better css or bootstrap"],
    answer:
      "Bootstrap is great for rapid layout, but custom CSS gives freedom. I combine both—Bootstrap for layout, and CSS for custom animations, hover effects, and fine-tuning."
  },
  {
    keywords: ["glassmorphism", "ui theme"],
    answer:
      "Glassmorphism is a style with blurry backgrounds, frosty panels, and light borders. I use it to make my portfolio look elegant and modern with a black-pink theme."
  },
  {
    keywords: ["typewriter effect", "text animation"],
    answer:
      "In my portfolio, I used JavaScript and CSS keyframes to create a typewriter effect. It adds dynamic energy and attention to headlines."
  },
  {
    keywords: ["how do you stay motivated"],
    answer:
      "My motivation comes from seeing results in my projects. Even if I face bugs, I don’t stop until I complete them. Breaks help me think of better ideas and bounce back stronger."
  },
  {
    keywords: ["full stack", "frontend backend"],
    answer:
      "Frontend includes HTML, CSS, JS, React. Backend includes Python, Django, databases, APIs. I’ve practiced both, especially integrating ML models with Django for full-stack projects."
  },
  {
    keywords: ["difference between sql and nosql"],
    answer:
      "SQL databases (like PostgreSQL) store structured data in tables. NoSQL (like MongoDB) is flexible, stores in JSON-like format. I use SQL for structured, analytical queries."
  },
  {
    keywords: ["codewithharry", "youtube", "frontend learning"],
    answer:
      "CodeWithHarry helped me understand HTML, CSS, and JS basics with real projects. It was a great starting point to build strong foundations."
  },
  {
    keywords: ["error makes clever", "youtube channel"],
    answer:
      "Error Makes Clever focuses on practical examples and gives confidence to debug errors. It taught me how to build real pages and think logically while coding."
  },
  {
    keywords: ["internship", "izeon innovative", "web development"],
    answer:
      "I learned both frontend and backend through IZEON’s internship. The mentors assigned tasks, conducted regular reviews, and helped me build hands-on skills in real-world projects."
  },
  {
    keywords: ["practice ideas", "mini projects to build"],
    answer:
      "Try building: portfolio, text editor, calculator, weather app, landing pages from Dribbble, plant disease detection site, or to-do list with authentication."
  },
  {
    keywords: ["daily learning", "how much time to spend"],
    answer:
      "I believe consistent practice matters more than hours. Even 2 hours of focused practice daily helped me grow rapidly. I also use short breaks to think through UI logic."
  },
  {
    keywords: ["how to do certifications", "useful courses"],
    answer:
      "I choose hands-on courses from Udemy, HackerRank, and Unstop. I pick ones with real projects, not just theory. These helped me upskill and validate my learning."
  },
  {
    keywords: ["postman", "api testing"],
    answer:
      "I use Postman to test APIs in Django backend—checking routes, response formats, and debugging. It helps in frontend-backend integration during full-stack development."
  },
  {
    keywords: ["roadmap for frontend development", "to be frontend developer"],
    answer:
      "Start with HTML → CSS → JavaScript → Git → Bootstrap → React → Projects → Deployment. Practice regularly and build mini projects to gain confidence."
  }



];

const findAnswer = (message) => {
  const lower = message.toLowerCase();
  for (const item of responseData) {
    if (item.keywords.some((keyword) => lower.includes(keyword))) {
      return item.answer;
    }
  }
  return "Sorry, I don't have an answer for that. Ask about my skills, projects, or learning path!";
};

export default findAnswer;
