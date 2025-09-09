import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Code, Database, Cloud, Wrench, BookOpen, Trophy, Star, Zap, Target, Award, Sparkles, Users, Clock } from "lucide-react";
import { skillsApi } from "../services/api";
import { LoadingPage } from "../components/LoadingSpinner";

const Skills = () => {
  const [skillsData, setSkillsData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      // Simulate API call delay for smooth UX
      await new Promise(resolve => setTimeout(resolve, 600));
      setSkillsData(skills);
    } catch (err) {
      console.error('Error fetching skills:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const getIconForCategory = (category) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="h-6 w-6" />;
      case "Frameworks & Technologies":
        return <Wrench className="h-6 w-6" />;
      case "Databases":
        return <Database className="h-6 w-6" />;
      case "DevOps & Tools":
        return <Cloud className="h-6 w-6" />;
      case "Core Concepts":
        return <BookOpen className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  const getSkillLevelBadge = (level) => {
    if (level >= 90) return { label: "Expert", color: "bg-green-500", icon: <Trophy className="h-3 w-3" /> };
    if (level >= 80) return { label: "Advanced", color: "bg-blue-500", icon: <Star className="h-3 w-3" /> };
    if (level >= 70) return { label: "Proficient", color: "bg-purple-500", icon: <Zap className="h-3 w-3" /> };
    return { label: "Learning", color: "bg-orange-500", icon: <Target className="h-3 w-3" /> };
  };

  const certifications = [
    { name: "AWS Educate Machine Learning Foundations", year: "2025", provider: "AWS" },
    { name: "Introducing Generative AI with AWS", year: "2025", provider: "Udacity" },
    { name: "ML Research Intern Certification", year: "2024", provider: "Spartificial" },
    { name: "Astronomical Data Science", year: "2024", provider: "Spartificial" },
    { name: "Python Data Structures", year: "2021", provider: "University of Michigan" },
    { name: "Ethical Hacking & Cyber Security", year: "2021", provider: "Ersegment Solutions" }
  ];

  // Calculate overall progress
  const totalSkills = Object.values(skillsData).flat().length;
  const expertSkills = Object.values(skillsData).flat().filter(skill => skill.level >= 90).length;
  const advancedSkills = Object.values(skillsData).flat().filter(skill => skill.level >= 80 && skill.level < 90).length;

  if (loading) {
    return <LoadingPage message="Loading skills..." />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            A comprehensive overview of my technical skills, frameworks, and tools I use to build robust backend systems and intelligent solutions.
          </p>
          
          {/* Skills Overview Stats */}
          <div className="flex justify-center mt-10">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-2">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{expertSkills}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-2">
                  <Star className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{advancedSkills}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Advanced Level</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-2">
                  <Zap className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{totalSkills}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Total Skills</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-16 mb-20">
          {Object.entries(skillsData).map(([category, categorySkills]) => (
            <Card key={category} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shadow-sm">
                    {getIconForCategory(category)}
                  </div>
                  {category}
                  <Badge className="ml-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {categorySkills.length} skills
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {categorySkills.map((skill, skillIndex) => {
                    const levelBadge = getSkillLevelBadge(skill.level);
                    return (
                      <div key={skillIndex} className="space-y-4 group">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg transition-colors duration-300">
                              {skill.name}
                            </h3>
                            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-white text-xs ${levelBadge.color}`}>
                              {levelBadge.icon}
                              <span>{levelBadge.label}</span>
                            </div>
                          </div>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-3" />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* What I Excel At */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                What I Excel At
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {[
                  {
                    title: "Backend Architecture",
                    description: "Designing scalable microservices with proper separation of concerns and enterprise-grade patterns",
                    icon: "🏗️"
                  },
                  {
                    title: "API Development",
                    description: "Creating secure, well-documented REST APIs with comprehensive error handling and validation",
                    icon: "🔗"
                  },
                  {
                    title: "AI/ML Research",
                    description: "Developing deep learning models and conducting research in astronomical data science",
                    icon: "🧠"
                  },
                  {
                    title: "Performance Optimization",
                    description: "Optimizing database queries and improving system performance through data-driven approaches",
                    icon: "⚡"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 flex items-center">
                <Target className="h-6 w-6 text-green-500 mr-2" />
                Currently Exploring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced AI/ML",
                    description: "Exploring generative AI, transformer architectures, and advanced neural network patterns",
                    icon: "🤖"
                  },
                  {
                    title: "Cloud Technologies",
                    description: "AWS services, cloud-native development, and serverless architecture patterns",
                    icon: "☁️"
                  },
                  {
                    title: "Event-Driven Architecture",
                    description: "Implementing messaging patterns, event sourcing, and distributed system design",
                    icon: "🔄"
                  },
                  {
                    title: "GraphQL & Modern APIs",
                    description: "Next-generation API development with GraphQL and modern data fetching patterns",
                    icon: "📊"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 flex items-center">
              <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
              Certifications & Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">
                      {cert.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {cert.provider}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl transition-colors duration-300">
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed transition-colors duration-300">
                <strong className="text-slate-900 dark:text-white">Continuous Learning:</strong> Staying current with the latest technologies, frameworks, and best practices in software development, AI/ML, and enterprise architecture. Always exploring new ways to solve complex problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;