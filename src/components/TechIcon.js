import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt
} from 'react-icons/fa';
import { 
  SiMongodb, SiDjango, SiPostgresql, SiOpenai, SiTypescript, SiFastapi, 
  SiPytorch, SiScikitlearn, SiWeb3Dotjs, SiSolidity, SiCplusplus, 
  SiJavascript, SiNextdotjs, SiExpress, SiSpringboot, SiBootstrap, 
  SiTailwindcss, SiSqlalchemy, SiMysql, SiSupabase, SiPostman, 
  SiRender, SiVercel, SiRailway
} from 'react-icons/si';

export default function TechIcon({ name, className = "" }) {
  const iconMap = {
    'React': <FaReact className={className} />,
    'React.js': <FaReact className={className} />,
    'Node.js': <FaNodeJs className={className} />,
    'MongoDB': <SiMongodb className={className} />,
    'Django': <SiDjango className={className} />,
    'Django REST Framework': <SiDjango className={className} />,
    'PostgreSQL': <SiPostgresql className={className} />,
    'OpenAI CLIP': <SiOpenai className={className} />,
    'TypeScript': <SiTypescript className={className} />,
    'FastAPI': <SiFastapi className={className} />,
    'Python': <FaPython className={className} />,
    'PyTorch': <SiPytorch className={className} />,
    'Scikit-learn': <SiScikitlearn className={className} />,
    'Web3.py': <SiWeb3Dotjs className={className} />,
    'Solidity': <SiSolidity className={className} />,
    'Java': <FaJava className={className} />,
    'C++': <SiCplusplus className={className} />,
    'JavaScript': <SiJavascript className={className} />,
    'HTML': <FaHtml5 className={className} />,
    'CSS': <FaCss3Alt className={className} />,
    'Next.js': <SiNextdotjs className={className} />,
    'Express.js': <SiExpress className={className} />,
    'Spring Boot': <SiSpringboot className={className} />,
    'Bootstrap': <SiBootstrap className={className} />,
    'Tailwind CSS': <SiTailwindcss className={className} />,
    'SQLAlchemy': <SiSqlalchemy className={className} />,
    'MySQL': <SiMysql className={className} />,
    'Supabase': <SiSupabase className={className} />,
    'Git': <FaGitAlt className={className} />,
    'GitHub': <FaGithub className={className} />,
    'Postman': <SiPostman className={className} />,
    'Uvicorn': <SiFastapi className={className} />, 
    'Railway': <SiRailway className={className} />,
    'Vercel': <SiVercel className={className} />,
    'Render': <SiRender className={className} />
  };

  return iconMap[name] || null;
}
