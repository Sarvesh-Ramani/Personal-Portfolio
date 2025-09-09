import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Code, Database, Cloud, Brain } from "lucide-react";
import { personalInfoApi, projectsApi, skillsApi } from "../services/api";
import { LoadingPage } from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch personal info, featured projects, and skills
      const [personalData, projectsData, skillsData] = await Promise.all([
        personalInfoApi.get(),
        projectsApi.getFeatured(),
        skillsApi.getAll()
      ]);

      setPersonalInfo(personalData);
      setFeaturedProjects(projectsData);
      
      // Extract unique tech stack from skills
      const programmingSkills = skillsData
        .filter(skill => ['Programming Languages', 'Frameworks & Technologies', 'Databases', 'DevOps & Tools'].includes(skill.category))
        .map(skill => skill.name);
      setTechStack(programmingSkills.slice(0, 8)); // Limit to 8 items
      
    } catch (err) {
      console.error('Error fetching home page data:', err);
      setError('Failed to load page data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage message="Loading your portfolio..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors duration-200">
        <ErrorMessage 
          title="Failed to load portfolio"
          message={error}
          onRetry={fetchData}
        />
      </div>
    );
  }

  if (!personalInfo) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors duration-200">
        <ErrorMessage 
          title="No data found"
          message="Portfolio data is not available."
          onRetry={fetchData}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 py-20 lg:py-32 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                  {personalInfo.title}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-200">
                  Hi, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl transition-colors duration-200">
                  {personalInfo.summary}
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
                  <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Technologies I Work With
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
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
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
              Combining technical expertise with problem-solving skills to deliver enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
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