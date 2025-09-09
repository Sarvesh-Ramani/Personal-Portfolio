import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, Code, Brain, Shield, Plus } from "lucide-react";

const Projects = () => {
  const mainProjects = [
    {
      title: "GravitySpy Glitch Classification",
      description: "Designed and trained a deep learning model to classify various types of gravitational wave glitches using CNNs, improving recognition accuracy and aiding LIGO data analysis.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "CNN", "Data Analysis"],
      category: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
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
      icon: <Shield className="h-6 w-6" />,
      highlights: [
        "Implemented secure certificate management",
        "Integrated PKI protocols for V2X communication",
        "Built RESTful APIs for certificate operations",
        "Ensured compliance with automotive security standards"
      ],
      status: "Completed",
      type: "Enterprise Project"
    }
  ];

  const placeholderProjects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable microservices-based e-commerce platform with user management, product catalog, and order processing services.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend Development",
      icon: <Code className="h-6 w-6" />,
      status: "In Planning",
      type: "Personal Project"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with WebSocket support, user authentication, and message history.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "React", "JWT"],
      category: "Full Stack",
      icon: <Code className="h-6 w-6" />,
      status: "Coming Soon",
      type: "Personal Project"
    },
    {
      title: "AI-Powered Log Analysis Tool",
      description: "An intelligent log analysis tool that uses machine learning to detect anomalies and predict system failures.",
      technologies: ["Python", "TensorFlow", "ElasticSearch", "Kafka", "Docker"],
      category: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      status: "Concept",
      type: "Research Project"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Planning":
        return "bg-yellow-100 text-yellow-700";
      case "Coming Soon":
        return "bg-blue-100 text-blue-700";
      case "Concept":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Machine Learning":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Backend Development":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Full Stack":
        return "bg-green-100 text-green-700 border-green-200";
      case "AI/ML":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Projects & Work
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects, from machine learning applications to enterprise backend systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainProjects.map((project, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                        project.category === "Machine Learning" ? "bg-orange-500" : "bg-blue-500"
                      }`}>
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900 mb-2">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className={getCategoryColor(project.category)}>
                            {project.category}
                          </Badge>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600">{project.description}</p>
                  
                  {project.highlights && (
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Private Repo
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Upcoming Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((project, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                      project.category === "AI/ML" ? "bg-purple-500" :
                      project.category === "Full Stack" ? "bg-green-500" : "bg-blue-500"
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-900 mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Planned Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-slate-200 bg-gradient-to-r from-blue-50 to-slate-50">
            <CardContent className="p-8">
              <Plus className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">More Projects Coming Soon</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more exciting developments in backend systems, AI/ML applications, and enterprise solutions.
              </p>
              <Button asChild>
                <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Let's Collaborate
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;