import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle, ArrowRight, BookOpen, Trophy, Star, Target } from "lucide-react";

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
      location: "Coimbatore, Tamil Nadu, India",
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

  const keySkills = [
    {
      title: "Backend Engineering",
      description: "Designing robust, scalable backend systems with modern frameworks",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
      title: "AI/ML Development",
      description: "Building intelligent systems and machine learning solutions",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Data Science"]
    },
    {
      title: "Cloud & DevOps",
      description: "Implementing containerized deployments and cloud solutions",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    }
  ];

  const education = {
    degree: "Bachelor of Engineering - Mechanical Engineering",
    institution: "Coimbatore Institute of Technology",
    period: "Jul 2019 - 2023",
    location: "Coimbatore, Tamil Nadu, India",
    description: "Graduated with strong foundation in engineering principles and problem-solving methodologies. Successfully transitioned from mechanical engineering to software development during final year through self-directed learning and practical projects."
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            My journey in software development, from R&D exploration to Software Engineer II, 
            with expertise spanning backend systems, AI/ML research, and enterprise solutions.
          </p>


        </div>

        {/* Experience Cards */}
        <div className="space-y-16 mb-20">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50/50 to-slate-50/50 dark:from-blue-900/10 dark:to-slate-800/50 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Building className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{experience.role}</CardTitle>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3 transition-colors duration-300">{experience.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                          {experience.period} · {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                          {experience.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 transition-colors duration-300">
                          {experience.type}
                        </Badge>
                        {experience.workType && (
                          <Badge variant="outline" className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 transition-colors duration-300">
                            {experience.workType}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed transition-colors duration-300">{experience.description}</p>
                
                {/* Key Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Key Achievements</h3>
                  <div className="space-y-4">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">Core Competencies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keySkills.map((skill, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">{skill.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">{skill.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">Education</h2>
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 max-w-4xl mx-auto shadow-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-slate-600 dark:bg-slate-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{education.degree}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300">{education.institution}</p>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {education.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {education.location}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{education.description}</p>
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