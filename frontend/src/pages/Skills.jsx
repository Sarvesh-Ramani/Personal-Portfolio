import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Code, Database, Cloud, Wrench, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 90, description: "Primary language for backend development" },
        { name: "Python", level: 75, description: "Used for AI/ML projects and scripting" },
        { name: "JavaScript", level: 70, description: "Frontend and Node.js development" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Spring Boot", level: 90, description: "Expert in building microservices" },
        { name: "TensorFlow", level: 70, description: "Machine learning model development" },
        { name: "Scikit-learn", level: 75, description: "Data science and ML algorithms" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL database design and optimization" },
        { name: "SQL", level: 75, description: "Relational database management" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 80, description: "Containerization and deployment" },
        { name: "Kubernetes", level: 70, description: "Container orchestration" },
        { name: "Git", level: 85, description: "Version control and collaboration" }
      ]
    },
    {
      title: "Core Concepts",
      icon: <BookOpen className="h-6 w-6" />,
      skills: [
        { name: "Microservices", level: 90, description: "Architecture design and implementation" },
        { name: "REST APIs", level: 95, description: "API design and development" },
        { name: "PKI", level: 80, description: "Public Key Infrastructure and security" },
        { name: "AI/ML", level: 70, description: "Machine learning and data science" }
      ]
    }
  ];

  const certifications = [
    "Spring Boot Certified Developer",
    "MongoDB Certified Developer",
    "Docker Fundamentals",
    "Kubernetes Basics"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, frameworks, and tools I work with to build robust backend systems.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                        <span className="text-sm text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-slate-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* What I Excel At */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">What I Excel At</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Backend Architecture</h4>
                    <p className="text-sm text-slate-600">Designing scalable microservices with proper separation of concerns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">API Development</h4>
                    <p className="text-sm text-slate-600">Creating secure, well-documented REST APIs with proper error handling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Problem Solving</h4>
                    <p className="text-sm text-slate-600">Debugging complex issues and implementing robust solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Performance Optimization</h4>
                    <p className="text-sm text-slate-600">Optimizing database queries and improving system performance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Currently Exploring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Advanced AI/ML</h4>
                    <p className="text-sm text-slate-600">Deep learning with TensorFlow and neural network architectures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Cloud Technologies</h4>
                    <p className="text-sm text-slate-600">AWS services and cloud-native application development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Event-Driven Architecture</h4>
                    <p className="text-sm text-slate-600">Implementing messaging patterns and event sourcing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">GraphQL</h4>
                    <p className="text-sm text-slate-600">Modern API development with GraphQL and Apollo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Certifications & Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center justify-center bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                  {cert}
                </Badge>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600 text-center">
                <strong>Note:</strong> Continuously learning and staying updated with the latest technologies and best practices in backend development.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;