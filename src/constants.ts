import { Exam, Domain } from './types';
import { INTERNSHIP_QUESTIONS } from './data/questions';
import { WEB_DEV_QUESTIONS } from './data/webDevQuestions';
import { AI_ML_QUESTIONS } from './data/aiMlQuestions';
import { DATA_ANALYST_QUESTIONS } from './data/dataAnalystQuestions';
import { DATA_SCIENCE_QUESTIONS } from './data/dataScienceQuestions';
import { CYBER_SECURITY_QUESTIONS } from './data/cyberSecurityQuestions';
import { PATENT_RESEARCH_QUESTIONS } from './data/patentResearchQuestions';

export const DOMAINS: Domain[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    duration: '2-3 Months',
    level: 'Beginner to Intermediate',
    description: 'Master the art of building scalable web applications. From crafting intuitive user interfaces with React and Tailwind CSS to developing robust server-side logic with Node.js and Express.',
    keySkills: ['Full-Stack React & Node.js', 'Responsive UI/UX Design', 'RESTful API Development', 'Cloud Deployment (AWS/Vercel)'],
    highlights: ['Build a real-world E-commerce platform', 'Implement secure JWT authentication', 'Optimize web performance & SEO', 'Version control with Git/GitHub'],
    careerPaths: ['Full-Stack Developer', 'Front-End Engineer', 'Back-End Developer', 'UI/UX Developer'],
    demand: 'High demand across all sectors as businesses shift to digital-first models.',
    future: 'Remote work, freelance projects, and roles in top tech firms.'
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    duration: '3 Months',
    level: 'Intermediate',
    description: 'Explore the frontier of artificial intelligence. Gain hands-on experience with Python-based frameworks like TensorFlow and PyTorch.',
    keySkills: ['Deep Learning & Neural Nets', 'Computer Vision (OpenCV)', 'Natural Language Processing', 'Model Optimization & Tuning'],
    highlights: ['Develop an Image Recognition system', 'Build a Sentiment Analysis tool', 'Deploy models using Flask/FastAPI', 'Work with large-scale datasets'],
    careerPaths: ['Machine Learning Engineer', 'AI Researcher', 'Data Scientist', 'Robotics Engineer'],
    demand: 'Rapidly growing field with applications in healthcare, finance, and autonomous systems.',
    future: 'Leading innovation in automation and intelligent decision-making systems.'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    duration: '2 Months',
    level: 'Beginner',
    description: 'Transform raw data into actionable business insights. Learn advanced SQL for data extraction and master visualization tools like Tableau or PowerBI.',
    keySkills: ['Advanced SQL Querying', 'Data Visualization (Tableau)', 'Statistical Hypothesis Testing', 'Business Intelligence Reporting'],
    highlights: ['Create interactive executive dashboards', 'Perform market trend analysis', 'Automate data cleaning pipelines', 'Present data-driven business strategies'],
    careerPaths: ['Business Analyst', 'Data Visualization Expert', 'Operations Analyst', 'Market Researcher'],
    demand: 'Essential for data-driven decision-making in retail, finance, and marketing.',
    future: 'Transition into strategic leadership roles by mastering data storytelling.'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    duration: '3-4 Months',
    level: 'Intermediate to Advanced',
    description: 'The intersection of statistics, programming, and domain expertise. Dive deep into complex datasets using big data technologies.',
    keySkills: ['Predictive Modeling (Scikit-learn)', 'Big Data Processing (Spark)', 'Exploratory Data Analysis', 'Data Storytelling & Reporting'],
    highlights: ['Build a recommendation engine', 'Implement time-series forecasting', 'Handle unstructured data at scale', 'A/B testing and experimentation'],
    careerPaths: ['Data Scientist', 'Data Architect', 'Quantitative Analyst', 'Statistician'],
    demand: 'High demand for professionals who can extract value from big data.',
    future: 'Work on cutting-edge predictive models and large-scale data systems.'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    duration: '3 Months',
    level: 'Intermediate',
    description: 'Protect the digital world from evolving threats. Learn the fundamentals of ethical hacking, penetration testing, and network defense.',
    keySkills: ['Ethical Hacking & Pen Testing', 'Network Security Protocols', 'Cryptography Fundamentals', 'Incident Response Planning'],
    highlights: ['Conduct vulnerability assessments', 'Simulate real-world cyber attacks', 'Implement secure network architectures', 'Learn digital forensics basics'],
    careerPaths: ['Security Analyst', 'Penetration Tester', 'Security Consultant', 'CISO'],
    demand: 'Critical demand due to increasing cyber threats and data privacy regulations.',
    future: 'High-stakes roles protecting sensitive infrastructure and corporate data.'
  },
  {
    id: 'patent-research',
    title: 'Patent & Research',
    duration: '4-6 Months',
    level: 'Advanced',
    description: 'Bridge the gap between technology, innovation, and research. Includes patent development, research paper writing, and publication support.',
    keySkills: ['Intellectual Property Strategy', 'Scientific Research Methods', 'Drafting Technical Claims', 'Technical Paper Writing'],
    highlights: ['Draft a complete patent application', 'Publish a technical research paper', 'Conduct global prior-art searches', 'Collaborate on IP-focused projects'],
    careerPaths: ['Patent Agent', 'Research Scientist', 'IP Consultant', 'Innovation Manager'],
    demand: 'Growing need for protecting intellectual property in a competitive global market.',
    future: 'Influence the future of technology by securing legal protection for new inventions.'
  }
];

export const ENTRANCE_EXAM: Exam = {
  id: 'entrance-test-2026',
  title: 'Internship Entrance Examination',
  description: 'A comprehensive 60-question assessment covering Aptitude, GK, OS, DBMS, DAA, DSA, CN, JAVA, AI, ML, Cloud, GIT, AFL, and COA.',
  durationMinutes: 90,
  questions: INTERNSHIP_QUESTIONS
};

export const DOMAIN_EXAMS: Record<string, Exam> = {
  'web-dev': {
    id: 'exam-web-dev',
    title: 'Advanced Web Development Assessment',
    description: '100 High-level questions on React, Node.js, Architecture, and Performance.',
    durationMinutes: 30,
    questions: WEB_DEV_QUESTIONS
  },
  'ai-ml': {
    id: 'exam-ai-ml',
    title: 'Advanced AI & ML Assessment',
    description: '100 High-level questions on Deep Learning, Transformers, and Optimization.',
    durationMinutes: 30,
    questions: AI_ML_QUESTIONS
  },
  'data-analyst': {
    id: 'exam-data-analyst',
    title: 'Advanced Data Analysis Assessment',
    description: '100 High-level questions on Statistics, SQL, and Visualization.',
    durationMinutes: 30,
    questions: DATA_ANALYST_QUESTIONS
  },
  'data-science': {
    id: 'exam-data-science',
    title: 'Advanced Data Science Assessment',
    description: '100 High-level questions on Big Data, Predictive Modeling, and Ensemble Learning.',
    durationMinutes: 30,
    questions: DATA_SCIENCE_QUESTIONS
  },
  'cyber-security': {
    id: 'exam-cyber-security',
    title: 'Advanced Cyber Security Assessment',
    description: '100 High-level questions on Network Security, Cryptography, and Ethical Hacking.',
    durationMinutes: 30,
    questions: CYBER_SECURITY_QUESTIONS
  },
  'patent-research': {
    id: 'exam-patent-research',
    title: 'Advanced Patent & Research Assessment',
    description: '100 High-level questions on IP Law, Research Methodology, and Scientific Writing.',
    durationMinutes: 30,
    questions: PATENT_RESEARCH_QUESTIONS
  }
};
