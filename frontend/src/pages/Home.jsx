import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Code, Database, Cloud, Brain } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Development",
      description: "1.5+ years building scalable microservices with Java & Spring Boot"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "API Design",
      description: "Expert in designing secure REST APIs and database architecture"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Enterprise Solutions",
      description: "Delivered critical fixes and enhancements for enterprise clients"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Exploration",
      description: "Exploring AI/ML applications with TensorFlow and Scikit-learn"
    }
  ];

  const techStack = ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes", "Python", "TensorFlow"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 py-20 lg:py-32 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Backend Developer
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-200">
                  Hi, I'm{" "}
                  <span className="text-blue-600">Sarvesh Ramani</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl transition-colors duration-200">
                  Backend Developer with 1.5+ years of experience designing scalable microservices and exploring AI/ML applications. 
                  Passionate about creating enterprise-level solutions that drive business value.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Technologies I Work With
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg"
                  alt="Sarvesh Ramani"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-200">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Combining technical expertise with problem-solving skills to deliver enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to discuss your next project? I'm always open to exploring new opportunities and challenges.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;