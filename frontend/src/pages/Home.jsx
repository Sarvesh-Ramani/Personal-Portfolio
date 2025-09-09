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
      title: "Backend Engineering",
      description: "2+ years building scalable microservices with Java & Spring Boot"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "API Architecture",
      description: "Expert in designing secure REST APIs and enterprise database systems"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Enterprise Solutions",
      description: "Delivered production-grade solutions for enterprise clients"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Research",
      description: "Published research in deep learning and astronomical data science"
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
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
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
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
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
      <section className="bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 px-4 py-2">
                  {personalInfo.title}
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                  Hi, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[0]}</span>
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed transition-colors duration-300">
                  {personalInfo.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 px-8 py-3">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Technologies I Work With
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 px-3 py-1">
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
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse scale-110"></div>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Combining technical expertise with innovative problem-solving to deliver enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto shadow-sm">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            {personalInfo.tagline}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
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