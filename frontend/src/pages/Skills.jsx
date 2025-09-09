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
    "Spring Boot Certified Developer",
    "MongoDB Certified Developer",
    "Docker Fundamentals",
    "Kubernetes Basics"
  ];

  if (loading) {
    return <LoadingPage message="Loading skills..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors duration-200">
        <ErrorMessage 
          title="Failed to load skills"
          message={error}
          onRetry={fetchSkills}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
            A comprehensive overview of my technical skills, frameworks, and tools I work with to build robust backend systems.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 mb-16">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <Card key={category} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    {getIconForCategory(category)}
                  </div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">{skill.name}</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">{skill.description}</p>
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
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white transition-colors duration-200">What I Excel At</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Backend Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Designing scalable microservices with proper separation of concerns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">API Development</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Creating secure, well-documented REST APIs with proper error handling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Problem Solving</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Debugging complex issues and implementing robust solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Performance Optimization</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Optimizing database queries and improving system performance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white transition-colors duration-200">Currently Exploring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Advanced AI/ML</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Deep learning with TensorFlow and neural network architectures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Cloud Technologies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">AWS services and cloud-native application development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Event-Driven Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Implementing messaging patterns and event sourcing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">GraphQL</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">Modern API development with GraphQL and Apollo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-white transition-colors duration-200">Certifications & Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
                  {cert}
                </Badge>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg transition-colors duration-200">
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center transition-colors duration-200">
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