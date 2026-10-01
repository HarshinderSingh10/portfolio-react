import {
  FaChartLine,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiFlask,
  SiGooglecolab,
  SiJupyter,
  SiKeras,
  SiMysql,
  SiPostgresql,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'
import { FiMail } from 'react-icons/fi'

export const contact = {
  email: 'harshindersingh10@gmail.com',
  phone: '+91 8544807931',
  location: 'Ghaziabad, India',
  github: 'https://github.com/HarshinderSingh10',
  linkedin: 'https://linkedin.com/in/harshinder-singh-9a25b4356',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: contact.github, icon: FaGithub },
  { label: 'LinkedIn', href: contact.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${contact.email}`, icon: FiMail },
]

export const stats = [
  { value: 4, suffix: '', label: 'Total Projects' },
  { value: 7.05, suffix: '', label: 'Current CGPA' },
]

export const experience = {
  company: 'NTPC Limited, Dadri',
  role: 'Vocational Trainee',
  period: 'July 2026 - August 2026',
  points: [
    'Analyzed operational and maintenance data, organized datasets, and prepared reports to support process monitoring, performance evaluation, and data-driven decisions.',
    'Worked with engineering teams to understand industrial workflows and developed an ERP application for vocational training and internship candidate management.',
  ],
}

export const projects = [
  {
    title: 'InOut+ Attendance ERP',
    type: 'Industrial Project',
    summary:
      'Developed an enterprise Attendance ERP deployed across Swarna Technical Textiles Pvt. Ltd., Nufab Technical Textiles Pvt. Ltd., and Nufab Green Pvt. Ltd., supporting face-recognition attendance, shift tracking, and salary computation.',
    highlights: [
      'Face Recognition Attendance',
      'Shift Tracking',
      'Salary Computation',
      'Multi-factory PostgreSQL Architecture',
      'REST APIs: attendance, salary, leave, gate pass, PF, and ESI',
      'Automated Reports',
      'Workforce Analytics',
      'Operational Dashboards',
      'RBAC',
      'Enterprise Backend',
      'Synology NAS Deployment',
    ],
    tech: ['Python', 'PostgreSQL', 'REST APIs', 'Docker', 'React', 'FastAPI', 'Synology NAS', 'Face Recognition'],
    icon: SiPostgresql,
    featured: true,
    badge: 'Industrial Deployment',
  },
  {
    title: 'Identity Drift Detection & Adaptive Re-Enrollment for Face Recognition',
    type: 'Machine Learning / Computer Vision / Research',
    summary:
      'Developed a research system to measure temporal changes in facial representations caused by aging, lighting, expression, camera, and image-quality variations using longitudinal evaluation. Designed quantitative measures for embedding drift and identity stability and analyzed drift patterns to investigate adaptive re-enrollment based on identity stability.',
    highlights: [
      'Longitudinal Evaluation',
      'Embedding Drift Measurement',
      'Identity Stability Analysis',
      'Adaptive Re-Enrollment',
    ],
    tech: [
      'Python',
      'InsightFace',
      'ArcFace',
      'Face Embeddings',
      'ONNX Runtime',
      'OpenCV',
      'Computer Vision',
      'Machine Learning',
      'Embedding Drift',
      'Identity Stability',
      'Adaptive Re-Enrollment',
      'Longitudinal Evaluation',
    ],
    icon: FaPython,
    prominent: true,
    badge: 'Research',
  },
  {
    title: 'AI-Powered Photo Discovery & Face Search',
    type: 'AI / Computer Vision',
    summary:
      'Developed an AI-powered photo search system using Google Drive API, OAuth, and InsightFace to retrieve images, detect faces, and perform reference-based face matching. Used Google Drive metadata with dynamically sized thumbnails to perform recognition on lightweight image representations instead of downloading and processing the complete dataset.',
    highlights: [
      'Reference-Based Face Matching',
      'Google Drive Metadata',
      'Dynamically Sized Thumbnails',
      'Lightweight Recognition Pipeline',
    ],
    tech: [
      'Python',
      'Google Drive API',
      'OAuth',
      'InsightFace',
      'Face Detection',
      'Face Recognition',
      'Face Embeddings',
      'Google Drive Metadata',
      'Image Processing',
    ],
    icon: FaPython,
    prominent: true,
    badge: 'AI Project',
  },
  {
    title: 'CattleEye',
    type: 'AI-Based Cattle Breed Classification System',
    summary:
      'Full-stack AI application for image-based cattle breed classification with a clean inference pipeline and structured data storage.',
    highlights: [
      'React',
      'Flask',
      'TensorFlow',
      'MySQL',
      'EfficientNetB0',
      'Dataset Collection',
      'Data Cleaning',
      'Image Preprocessing',
      'REST APIs',
      'Model Inference',
    ],
    tech: ['React', 'Flask', 'TensorFlow', 'MySQL', 'EfficientNetB0'],
    github: contact.github,
    icon: SiTensorflow,
  },
]

export const skillGroups = [
  { title: 'Programming', icon: FaPython, items: ['Python', 'SQL', 'Java', 'C++'] },
  {
    title: 'Data Science & ML',
    icon: SiScikitlearn,
    items: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'Machine Learning',
      'Feature Engineering',
      'Data Cleaning',
      'Data Modeling',
    ],
  },
  {
    title: 'Computer Vision',
    icon: SiTensorflow,
    items: ['OpenCV', 'InsightFace', 'ArcFace', 'Face Embeddings', 'Image Processing', 'ONNX Runtime'],
  },
  {
    title: 'Analytics',
    icon: FaChartLine,
    items: ['Tableau', 'Microsoft Excel', 'Power BI', 'Matplotlib', 'Exploratory Data Analysis', 'Data Visualization'],
  },
  { title: 'Backend & APIs', icon: SiFastapi, items: ['FastAPI', 'Flask', 'REST APIs', 'RBAC'] },
  { title: 'Databases', icon: FaDatabase, items: ['PostgreSQL', 'MySQL'] },
  { title: 'Frontend', icon: FaReact, items: ['React', 'HTML', 'CSS', 'Vite'] },
  {
    title: 'Developer Tools',
    icon: FaDocker,
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Jupyter Notebook',
      'VS Code',
      'Google Colab',
      'Synology NAS',
      'ChatGPT',
      'OpenAI Codex',
      'Claude',
    ],
  },
]

export const toolIcons = [SiFlask, SiMysql, SiKeras, SiJupyter, SiGooglecolab]

export const education = [
  {
    title: 'B.Tech Computer Science and Engineering',
    institution: 'ABES Institute of Technology',
    board: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
    period: 'Expected May 2027',
    result: 'Current CGPA: 7.05',
  },
  {
    title: '10+2',
    institution: 'Shri Guru Ram Rai Sr. Sec. Public School, Ludhiana, Punjab',
    board: 'Senior Secondary',
    period: 'March 2023',
    result: '82.8%',
  },
  {
    title: '10th',
    institution: 'BCM Arya Model Senior Secondary School, Ludhiana, Punjab',
    board: 'Secondary',
    period: 'March 2021',
    result: '80.4%',
  },
]

export const certifications = [
  { issuer: 'Oracle', title: 'AI Foundations Associate' },
  { issuer: 'ABES Institute of Technology', title: 'Data Analysis using SQL and Tableau' },
  { issuer: 'Infosys Springboard', title: 'Database Management System (Part 1 & 2)' },
  { issuer: 'Infosys Springboard', title: 'Troubleshooting Python & Machine Learning' },
]

export const achievements = [
  'Top 10 Team - Hacknovate 7.0',
  'State Basketball Player',
  'Smart India Hackathon Volunteer',
]
