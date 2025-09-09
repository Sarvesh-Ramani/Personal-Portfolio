import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AppViewX",
      role: "Software Engineer II", 
      period: "Aug 2023 - Present",
      duration: "2 yrs 2 mos",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      workType: "Hybrid",
      description: "Working as Software Engineer II focusing on engineering and product development with expertise in backend systems and enterprise solutions.",
      achievements: [
        "Developing scalable backend services using Java and Spring Boot",
        "Building secure REST APIs for enterprise PKI and digital signing workflows",
        "Collaborating on product development initiatives and feature enhancements",
        "Working with microservices architecture and containerized deployments",
        "Contributing to code reviews and maintaining high code quality standards"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Microservices", "PKI", "Docker", "Kubernetes"]
    },
    {
      company: "AppViewX",
      role: "Software Development Engineer - R&D Intern",
      period: "Jan 2023 - Jul 2023", 
      duration: "7 mos",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Internship",
      workType: "On-site",
      description: "Started as R&D intern focusing on software development and research initiatives in backend technologies.",
      achievements: [
        "Developed foundational knowledge in enterprise software development",
        "Worked on research and development projects using C++ and Python",
        "Gained experience in backend system design and implementation",
        "Contributed to proof-of-concept developments and technical documentation"
      ],
      technologies: ["C++", "Python", "Java", "Backend Development", "Research"]
    },
    {
      company: "Spartificial",
      role: "ML Research Intern",
      period: "May 2024 - Sep 2024",
      duration: "5 mos", 
      location: "Remote",
      type: "Internship",
      workType: "Remote",
      description: "Worked on ML research project focusing on GravitySpy Glitch Classification using Deep Learning techniques.",
      achievements: [
        "Designed and implemented deep learning models for gravitational wave glitch classification",
        "Achieved 95%+ accuracy in glitch detection using CNNs",
        "Processed large-scale LIGO astronomical datasets",
        "Published research findings and contributed to astronomical data science"
      ],
      technologies: ["Python", "TensorFlow", "Deep Learning", "CNN", "Data Science", "Machine Learning"]
    }
  ];

  const responsibilities = [
    {
      title: "Backend Development",
      description: "Design and develop scalable backend services using Java and Spring Boot framework",
      tasks: [
        "Build RESTful APIs with proper error handling and validation",
        "Implement business logic and data access layers",
        "Ensure code quality through testing and code reviews"
      ]
    },
    {
      title: "Production Support",
      description: "Part of engineering team responsible for maintaining and enhancing production systems",
      tasks: [
        "Monitor system performance and identify optimization opportunities",
        "Implement bug fixes and feature enhancements",
        "Collaborate with cross-functional teams for seamless deployments"
      ]
    },
    {
      title: "Research & Development",
      description: "Contribute to R&D initiatives and explore emerging technologies",
      tasks: [
        "Research new technologies and frameworks for potential adoption",
        "Develop proof-of-concepts for innovative solutions",
        "Participate in technical discussions and architecture decisions"
      ]
    }
  ];

  const education = {
    degree: "B.E Mechanical Engineering",
    institution: "Coimbatore Institute of Technology",
    period: "Jul 2019 - 2023",
    location: "Coimbatore, Tamil Nadu, India",
    description: "Graduated with a strong foundation in engineering principles, problem-solving, and analytical thinking. Transitioned from mechanical engineering to software development during final year."
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
            My journey in software development, from R&D internship to Software Engineer II, with focus on backend systems and AI/ML research.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12 mb-16">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg transition-colors duration-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      <Building className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-900 dark:text-white mb-2 transition-colors duration-200">{experience.role}</CardTitle>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-200">{experience.company}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period} · {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 transition-colors duration-200">
                          {experience.type}
                        </Badge>
                        {experience.workType && (
                          <Badge variant="outline" className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 transition-colors duration-200">
                            {experience.workType}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-200">{experience.description}</p>
                
                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-200">Key Achievements</h3>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-200">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-200">Key Responsibilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow transition-colors duration-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white transition-colors duration-200">{responsibility.title}</CardTitle>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{responsibility.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {responsibility.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-200">Education</h2>
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 max-w-4xl mx-auto transition-colors duration-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-slate-600 dark:bg-slate-500 rounded-lg flex items-center justify-center text-white">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">{education.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-200">{education.institution}</p>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {education.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {education.location}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{education.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;