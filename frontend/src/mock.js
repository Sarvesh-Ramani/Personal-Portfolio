// Mock data for the portfolio website
// This file contains all the static data used throughout the application

export const personalInfo = {
  name: "Sarvesh Ramani",
  title: "Backend Developer",
  email: "sarveshramani1004@gmail.com",
  phone: "+91 8939072479",
  linkedin: "https://www.linkedin.com/in/sarvesh-ramani",
  location: "India",
  profileImage: "https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg",
  summary: "Backend Developer with 1.5+ years of experience designing scalable microservices using Java, Spring Boot, and MongoDB. Adept at developing secure REST APIs, debugging production issues, and delivering enterprise-level custom enhancements.",
  tagline: "Passionate about creating enterprise-level solutions that drive business value."
};

export const experience = {
  current: {
    company: "AppViewX",
    role: "Backend Developer",
    period: "2023 - Present",
    location: "India",
    type: "Full-time",
    description: "Transitioned from core product development (SIGN+) to a SWAT engineering role resolving critical issues and improving client retention.",
    achievements: [
      "Developed secure REST APIs and modular backend components for SIGN+",
      "Resolved 50+ critical production issues with <24h turnaround",
      "Delivered customer-specific enhancements across AppViewX modules",
      "Collaborated directly with enterprise clients for tailored solutions"
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Microservices", "PKI", "Docker", "Kubernetes"]
  }
};

export const education = {
  degree: "B.E Mechanical Engineering",
  institution: "Coimbatore Institute of Technology",
  period: "June 2019 - May 2023",
  location: "Coimbatore, India"
};

export const skills = {
  programming: [
    { name: "Java", level: 90 },
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 70 }
  ],
  frameworks: [
    { name: "Spring Boot", level: 90 },
    { name: "TensorFlow", level: 70 },
    { name: "Scikit-learn", level: 75 }
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "SQL", level: 75 }
  ],
  tools: [
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 70 },
    { name: "Git", level: 85 }
  ],
  concepts: [
    { name: "Microservices", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "PKI", level: 80 },
    { name: "AI/ML", level: 70 }
  ]
};

export const projects = {
  featured: [
    {
      title: "GravitySpy Glitch Classification",
      description: "Designed and trained a deep learning model to classify various types of gravitational wave glitches using CNNs, improving recognition accuracy and aiding LIGO data analysis.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "CNN", "Data Analysis"],
      category: "Machine Learning",
      highlights: [
        "Achieved 95%+ accuracy in glitch classification",
        "Processed large-scale LIGO dataset",
        "Implemented custom CNN architecture",
        "Improved data analysis pipeline efficiency"
      ],
      status: "Completed",
      type: "Research Project"
    },
    {
      title: "Cert V2X",
      description: "Built a backend service for issuing and managing certificates used in Vehicle-to-Everything (V2X) communications, integrating secure signing with PKI protocols.",
      technologies: ["Java", "Spring Boot", "PKI", "Security", "V2X Protocol"],
      category: "Backend Development",
      highlights: [
        "Implemented secure certificate management",
        "Integrated PKI protocols for V2X communication",
        "Built RESTful APIs for certificate operations",
        "Ensured compliance with automotive security standards"
      ],
      status: "Completed",
      type: "Enterprise Project"
    }
  ],
  upcoming: [
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable microservices-based e-commerce platform with user management, product catalog, and order processing services.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend Development",
      status: "In Planning",
      type: "Personal Project"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with WebSocket support, user authentication, and message history.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "React", "JWT"],
      category: "Full Stack",
      status: "Coming Soon",
      type: "Personal Project"
    },
    {
      title: "AI-Powered Log Analysis Tool",
      description: "An intelligent log analysis tool that uses machine learning to detect anomalies and predict system failures.",
      technologies: ["Python", "TensorFlow", "ElasticSearch", "Kafka", "Docker"],
      category: "AI/ML",
      status: "Concept",
      type: "Research Project"
    }
  ]
};

export const achievements = [
  {
    title: "SPOT Award (2023)",
    description: "Awarded the quarterly SPOT award for consistently resolving customer issues and ensuring timely delivery.",
    year: "2023"
  },
  {
    title: "Excellence Award (2023-24)",
    description: "Received the Certificate of Excellence for consistent delivery and continuous efforts on delivering the best output.",
    year: "2023-24"
  }
];

export const techStack = [
  "Java", "Spring Boot", "MongoDB", "Docker", 
  "Kubernetes", "Python", "TensorFlow", "REST APIs"
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];