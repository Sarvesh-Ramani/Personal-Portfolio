// Mock data for the portfolio website - Frontend-only deployment
// This file contains all the static data used throughout the application

export const personalInfo = {
  name: "Sarvesh Ramani",
  title: "Software Engineer II",
  email: "sarveshramani1004@gmail.com",
  phone: "+91 8939072479",
  linkedin: "https://www.linkedin.com/in/sarvesh-ramani",
  location: "Chennai, Tamil Nadu, India",
  profileImage: "https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg",
  summary: "Software Engineer II with 2+ years of experience designing scalable microservices using Java, Spring Boot, and MongoDB. Passionate about AI/ML research and delivering enterprise-level solutions.",
  tagline: "Passionate about creating enterprise-level solutions that drive business value."
};

export const experience = [
  {
    company: "AppViewX",
    role: "Software Engineer II", 
    period: "Aug 2023 - Present",
    duration: "2 yrs 2 mos",
    location: "Chennai, Tamil Nadu, India",
    type: "Full-time",
    workType: "Hybrid",
    description: "Leading backend development initiatives in engineering and product development, specializing in enterprise PKI solutions and scalable microservices architecture.",
    achievements: [
      "Architected and developed scalable backend services using Java, Spring Boot, and microservices patterns",
      "Built secure REST APIs for enterprise digital signing workflows with PKI integration", 
      "Led product development initiatives resulting in enhanced system performance and user experience",
      "Collaborated with cross-functional teams to deliver enterprise-grade solutions on schedule",
      "Implemented containerized deployments using Docker and Kubernetes for improved scalability"
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Microservices", "PKI", "Docker", "Kubernetes", "AWS"]
  },
  {
    company: "AppViewX",
    role: "Software Development Engineer - R&D Intern",
    period: "Jan 2023 - Jul 2023", 
    duration: "7 mos",
    location: "Chennai, Tamil Nadu, India",
    type: "Internship",
    workType: "On-site",
    description: "Initiated career in software development through intensive R&D internship, focusing on backend technologies and enterprise software solutions.",
    achievements: [
      "Developed foundational expertise in enterprise software development using C++ and Python",
      "Contributed to research and development projects exploring innovative backend solutions",
      "Gained hands-on experience in system design, implementation, and technical documentation",
      "Collaborated with senior engineers on proof-of-concept developments and feasibility studies"
    ],
    technologies: ["C++", "Python", "Java", "Backend Development", "System Design", "Research"]
  },
  {
    company: "Spartificial",
    role: "ML Research Intern",
    period: "May 2024 - Sep 2024",
    duration: "5 mos", 
    location: "Remote",
    type: "Internship",
    workType: "Remote",
    description: "Conducted cutting-edge research in machine learning and astronomical data science, focusing on GravitySpy Glitch Classification using advanced deep learning techniques.",
    achievements: [
      "Designed and implemented deep learning models achieving 95%+ accuracy in gravitational wave glitch classification",
      "Processed and analyzed large-scale LIGO astronomical datasets using advanced CNN architectures",
      "Published research findings contributing to the field of astronomical data science and gravitational wave detection",
      "Developed automated data processing pipelines for efficient handling of astronomical time-series data"
    ],
    technologies: ["Python", "TensorFlow", "Deep Learning", "CNN", "Data Science", "Machine Learning", "Astronomical Data Analysis"]
  }
];

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
      type: "Research Project",
      isFeatured: true
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
      type: "Enterprise Project",
      isFeatured: true
    }
  ],
  upcoming: [
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable microservices-based e-commerce platform with user management, product catalog, and order processing services.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend Development",
      highlights: [],
      status: "In Planning",
      type: "Personal Project",
      isFeatured: false
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with WebSocket support, user authentication, and message history.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "React", "JWT"],
      category: "Full Stack",
      highlights: [],
      status: "Coming Soon",
      type: "Personal Project",
      isFeatured: false
    },
    {
      title: "AI-Powered Log Analysis Tool",
      description: "An intelligent log analysis tool that uses machine learning to detect anomalies and predict system failures.",
      technologies: ["Python", "TensorFlow", "ElasticSearch", "Kafka", "Docker"],
      category: "AI/ML",
      highlights: [],
      status: "Concept",
      type: "Research Project",
      isFeatured: false
    }
  ]
};

export const skills = {
  "Programming Languages": [
    { name: "Java", level: 90, description: "Primary language for backend development at AppViewX" },
    { name: "Python", level: 85, description: "Used for AI/ML projects and research at Spartificial" },
    { name: "JavaScript", level: 75, description: "Frontend development and Node.js applications" }
  ],
  "Frameworks & Technologies": [
    { name: "Spring Boot", level: 95, description: "Expert in building enterprise microservices" },
    { name: "TensorFlow", level: 80, description: "Deep learning and ML model development" },
    { name: "Scikit-learn", level: 85, description: "Data science and ML algorithms implementation" }
  ],
  "Databases": [
    { name: "MongoDB", level: 90, description: "NoSQL database design and optimization" },
    { name: "SQL", level: 80, description: "Relational database management and queries" }
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 85, description: "Containerization and deployment strategies" },
    { name: "Kubernetes", level: 80, description: "Container orchestration and scaling" },
    { name: "Git", level: 90, description: "Version control and collaborative development" },
    { name: "AWS", level: 75, description: "Cloud services and infrastructure management" }
  ],
  "Core Concepts": [
    { name: "Microservices", level: 95, description: "Architecture design and implementation" },
    { name: "REST APIs", level: 95, description: "API design and development expertise" },
    { name: "PKI", level: 85, description: "Public Key Infrastructure and security protocols" },
    { name: "AI/ML", level: 80, description: "Machine learning and data science applications" }
  ]
};

export const achievements = [
  {
    title: "AWS Educate Machine Learning Foundations (2025)",
    description: "Completed AWS certification focusing on artificial intelligence and machine learning fundamentals.",
    year: "2025"
  },
  {
    title: "ML Research Intern Certification (2024)",
    description: "Certified completion of ML Research Internship at Spartificial with expertise in AI, ML, and Deep Learning.",
    year: "2024"
  },
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

export const education = {
  degree: "Bachelor of Engineering - Mechanical Engineering",
  institution: "Coimbatore Institute of Technology",
  period: "Jul 2019 - 2023",
  location: "Coimbatore, Tamil Nadu, India",
  description: "Graduated with strong foundation in engineering principles and problem-solving methodologies. Successfully transitioned from mechanical engineering to software development during final year through self-directed learning and practical projects."
};

export const techStack = [
  "Java", "Spring Boot", "MongoDB", "Docker", 
  "Kubernetes", "Git", "AWS", "Python", "TensorFlow", "REST APIs"
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];