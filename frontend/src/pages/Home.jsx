import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Code, Database, Cloud, Brain, Trophy, Target, Zap, Star, Award, Sparkles } from "lucide-react";
import { personalInfoApi, projectsApi, skillsApi } from "../services/api";
import { techStack } from "../mock";
import { LoadingPage } from "../components/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [personalData, setPersonalData] = useState(null);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [techStackData, setTechStackData] = useState([]);
  const [portfolioProgress, setPortfolioProgress] = useState(0);
  const [isPortfolioUnlocked, setIsPortfolioUnlocked] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Engineering",
      description: "2+ years building scalable microservices with Java & Spring Boot",
      metric: "50+ APIs Built",
      level: 95,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "API Architecture",
      description: "Expert in designing secure REST APIs and enterprise database systems",
      metric: "95% Uptime",
      level: 90,
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Enterprise Solutions",
      description: "Delivered production-grade solutions for enterprise clients",
      metric: "100% Success Rate",
      level: 92,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML Research",
      description: "Published research in deep learning and astronomical data science",
      metric: "95%+ Accuracy",
      level: 85,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const achievements = [
    { 
      icon: <Trophy className="h-5 w-5" />, 
      label: "Awards & Recognition", 
      count: "4+",
      unlocked: true,
      badge: "🏆",
      description: "SPOT Award, Excellence Award, AWS Certified"
    },
    { 
      icon: <Target className="h-5 w-5" />, 
      label: "Projects Completed", 
      count: "25+",
      unlocked: portfolioProgress > 30,
      badge: "🎯",
      description: "Enterprise & Research Projects"
    },
    { 
      icon: <Zap className="h-5 w-5" />, 
      label: "Impact Delivered", 
      count: "50+",
      unlocked: portfolioProgress > 60,
      badge: "⚡",
      description: "Production Issues Resolved"
    }
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      // Simulate API call delay for smooth UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setPersonalData(personalInfo);
      setFeaturedProjects(projects.featured);
      setTechStackData(techStack);
      
    } catch (err) {
      console.error('Error loading data:', err);
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32 transition-colors duration-300 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Available for Opportunities
                  </Badge>
                  <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 px-4 py-2">
                    {personalData.title}
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{personalData.name.split(' ')[0]}</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{personalData.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed transition-colors duration-300">
                  {personalData.summary}
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-2">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{achievement.count}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 group">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 px-8 py-3">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              {techStackData.length > 0 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Technologies I Work With
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techStackData.map((tech, index) => (
                      <Badge key={tech} variant="outline" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 px-3 py-1">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse scale-110"></div>
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-1000">
                  <Zap className="h-6 w-6" />
                </div>
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
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                    {highlight.description}
                  </p>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {highlight.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white transition-colors duration-300 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            {personalData.tagline}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 group">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;