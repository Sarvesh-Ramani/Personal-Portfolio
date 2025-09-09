import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle, ArrowRight, BookOpen } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "AppViewX",
    role: "Backend Developer",
    period: "2023 - Present",
    location: "India",
    type: "Full-time",
    description: "Transitioned from core product development (SIGN+) to a SWAT engineering role resolving critical issues and improving client retention.",
    achievements: [
      "Developed secure REST APIs and modular backend components for SIGN+, enabling seamless digital signing workflows with identity providers and PKI systems",
      "Resolved 50+ critical production issues as part of the SWAT team, with <24h turnaround and detailed root cause analysis",
      "Delivered customer-specific enhancements and configuration fixes across AppViewX modules, improving satisfaction and retention",
      "Collaborated directly with enterprise clients to gather feature requirements and implement tailored solutions",
      "Designed and implemented microservices architecture for improved scalability and maintainability",
      "Optimized database queries and improved system performance by 30%"
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Microservices", "PKI", "Docker", "Kubernetes"]
  };

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
      description: "Part of SWAT team responsible for resolving critical production issues",
      tasks: [
        "Investigate and resolve customer-reported issues within 24 hours",
        "Perform root cause analysis and implement preventive measures",
        "Maintain detailed documentation of issues and solutions"
      ]
    },
    {
      title: "Client Collaboration",
      description: "Work directly with enterprise clients to understand and implement requirements",
      tasks: [
        "Gather feature requirements from client stakeholders",
        "Provide technical guidance and recommendations",
        "Deliver custom solutions tailored to client needs"
      ]
    }
  ];

  const education = {
    degree: "B.E Mechanical Engineering",
    institution: "Coimbatore Institute of Technology",
    period: "June 2019 - May 2023",
    location: "Coimbatore, India",
    description: "Graduated with a strong foundation in engineering principles, problem-solving, and analytical thinking."
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in backend development, from core product development to critical issue resolution.
          </p>
        </div>

        {/* Current Role */}
        <div className="mb-16">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Building className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 mb-2">{experience.role}</CardTitle>
                    <p className="text-xl text-blue-600 font-semibold">{experience.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-6">{experience.description}</p>
              
              {/* Key Achievements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Responsibilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{responsibility.title}</CardTitle>
                  <p className="text-slate-600">{responsibility.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {responsibility.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start space-x-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{task}</span>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education</h2>
          <Card className="border-slate-200 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center text-white">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{education.degree}</h3>
                  <p className="text-lg text-blue-600 mb-2">{education.institution}</p>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {education.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {education.location}
                    </div>
                  </div>
                  <p className="text-slate-600">{education.description}</p>
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