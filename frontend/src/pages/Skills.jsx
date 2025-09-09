import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Code, Database, Cloud, Wrench, BookOpen } from "lucide-react";
import { skillsApi } from "../services/api";
import { LoadingPage } from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const skillsData = await skillsApi.getAll();
      
      // Group skills by category
      const groupedSkills = skillsData.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {});

      setSkills(groupedSkills);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError('Failed to load skills data. Please try again.');
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

  const certifications = [
    "AWS Educate Machine Learning Foundations",
    "Introducing Generative AI with AWS",
    "ML Research Intern Certification",
    "Astronomical Data Science",
    "Python Data Structures",
    "Ethical Hacking & Cyber Security"
  ];

  if (loading) {
    return <LoadingPage message="Loading skills..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
        <ErrorMessage 
          title="Failed to load skills"
          message={error}
          onRetry={fetchSkills}
        />
      </div>
    );
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
        </div>

        {/* Skills by Category */}
        <div className="space-y-16 mb-20">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <Card key={category} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shadow-sm">
                    {getIconForCategory(category)}
                  </div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-lg transition-colors duration-300">{skill.name}</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{skill.description}</p>
                    </div>
                  ))}
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
              <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">What I Excel At</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Backend Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Designing scalable microservices with proper separation of concerns and enterprise-grade patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">API Development</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Creating secure, well-documented REST APIs with comprehensive error handling and validation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">AI/ML Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Developing deep learning models and conducting research in astronomical data science</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Performance Optimization</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Optimizing database queries and improving system performance through data-driven approaches</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Currently Exploring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Advanced AI/ML</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Exploring generative AI, transformer architectures, and advanced neural network patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Cloud Technologies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">AWS services, cloud-native development, and serverless architecture patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Event-Driven Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Implementing messaging patterns, event sourcing, and distributed system design</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">GraphQL & Modern APIs</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">Next-generation API development with GraphQL and modern data fetching patterns</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Certifications & Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="p-4 text-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl transition-colors duration-300">
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed transition-colors duration-300">
                <strong className="text-slate-900 dark:text-white">Continuous Learning:</strong> Staying updated with the latest technologies, frameworks, and best practices in software development, AI/ML, and enterprise architecture.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;