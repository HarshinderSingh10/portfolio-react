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
  SiPandas,
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
  { value: 3, suffix: '+', label: 'Enterprise deployments' },
  { value: 25, suffix: '+', label: 'Analytics workflows' },
  { value: 10, suffix: '', label: 'Hacknovate rank' },
  { value: 7.05, suffix: '', label: 'Current CGPA' },
]

export const experience = {
  company: 'NTPC Limited, Dadri',
  role: 'Vocational Trainee',
  period: 'July 2026 - Present',
  points: [
    'Assisted in analyzing operational and maintenance data for process monitoring and performance evaluation.',
    'Worked with engineering teams to understand industrial workflows and data collection practices.',
    'Performed data organization, reporting, and documentation for operational insights.',
    'Gained exposure to industrial automation systems and data-driven decision making.',
    'Currently building an ERP system for Vocational Training / Internship Candidates.',
  ],
}

export const projects = [
  {
    title: 'InOut+ Attendance ERP',
    type: 'Industrial Project',
    summary:
      'Attendance ERP deployed across Swarna Technical Textiles Pvt. Ltd., Nufab Technical Textiles Pvt. Ltd., and Nufab Green Pvt. Ltd.',
    highlights: [
      'Face Recognition Attendance',
      'Shift Tracking',
      'Salary Computation',
      'Workforce Analytics',
      'PostgreSQL Database Design',
      'Operational Dashboards',
      'RBAC',
      'Enterprise Backend',
      'Synology NAS Deployment',
    ],
    tech: ['Python', 'PostgreSQL', 'Docker', 'React', 'FastAPI', 'Synology NAS'],
    icon: SiPostgresql,
    featured: true,
  },
  {
    title: 'CattleEye',
    type: 'AI-Based Cattle Breed Classification',
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
  { title: 'Languages', icon: FaPython, items: ['Python', 'SQL', 'Java'] },
  {
    title: 'Data Science',
    icon: SiScikitlearn,
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib'],
  },
  {
    title: 'Analytics',
    icon: FaChartLine,
    items: ['Tableau', 'Microsoft Excel', 'Data Visualization', 'EDA'],
  },
  { title: 'Backend', icon: SiFastapi, items: ['Flask', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', icon: FaDatabase, items: ['PostgreSQL', 'MySQL'] },
  { title: 'Frontend', icon: FaReact, items: ['React', 'HTML', 'CSS'] },
  {
    title: 'Developer Tools',
    icon: FaDocker,
    items: ['Git', 'GitHub', 'Docker', 'Synology NAS', 'Jupyter Notebook', 'VS Code', 'Google Colab'],
  },
  {
    title: 'Concepts',
    icon: SiPandas,
    items: ['Machine Learning', 'Feature Engineering', 'Data Cleaning', 'Data Modeling', 'RBAC'],
  },
]

export const toolIcons = [SiFlask, SiMysql, SiKeras, SiJupyter, SiGooglecolab]

export const education = [
  {
    title: 'B.Tech Computer Science and Engineering',
    institution: 'ABES Institute of Technology',
    board: 'AKTU',
    period: 'Expected May 2027',
    result: 'Current CGPA: 7.05',
  },
  {
    title: '10+2',
    institution: 'Shri Guru Ram Rai Sr. Sec. Public School',
    board: 'Senior Secondary',
    period: 'Completed',
    result: '82.8%',
  },
  {
    title: '10th',
    institution: 'BCM Arya Model Senior Secondary School',
    board: 'Secondary',
    period: 'Completed',
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
