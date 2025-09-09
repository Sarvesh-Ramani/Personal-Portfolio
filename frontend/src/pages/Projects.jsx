import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, Code, Brain, Shield, Plus } from "lucide-react";
import { projectsApi } from "../services/api";
import { LoadingPage } from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const [featured, all] = await Promise.all([
        projectsApi.getFeatured(),
        projectsApi.getAll()
      ]);
      setFeaturedProjects(featured);
      setAllProjects(all);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
      case "In Planning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300";
      case "Coming Soon":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
      case "Concept":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300";
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Machine Learning":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "Backend Development":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      case "Full Stack":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700";
      case "AI/ML":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700";
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    }
  };

  const getProjectIcon = (category) => {
    switch (category) {
      case "Machine Learning":
      case "AI/ML":
        return <Brain className="h-6 w-6" />;
      case "Backend Development":
        return <Shield className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  if (loading) {
    return <LoadingPage message="Loading projects..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors duration-200">
        <ErrorMessage 
          title="Failed to load projects"
          message={error}
          onRetry={fetchProjects}
        />
      </div>
    );
  }

  // Separate featured and upcoming projects
  const upcomingProjects = allProjects.filter(project => !project.isFeatured);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
            Projects & Work
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
            A showcase of my technical projects, from machine learning applications to enterprise backend systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-200">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                        project.category === "Machine Learning" ? "bg-orange-500" : "bg-blue-500"
                      }`}>
                        {getProjectIcon(project.category)}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900 dark:text-white mb-2 transition-colors duration-200">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className={getCategoryColor(project.category)}>
                            {project.category}
                          </Badge>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-200">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{project.description}</p>
                  
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-200">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-200">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" disabled className="dark:border-slate-600 dark:text-slate-400">
                      <Github className="h-4 w-4 mr-2" />
                      Private Repo
                    </Button>
                    <Button variant="outline" size="sm" disabled className="dark:border-slate-600 dark:text-slate-400">
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
        {upcomingProjects.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-200">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                        project.category === "AI/ML" ? "bg-purple-500" :
                        project.category === "Full Stack" ? "bg-green-500" : "bg-blue-500"
                      }`}>
                        {getProjectIcon(project.category)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-slate-900 dark:text-white mb-2 transition-colors duration-200">{project.title}</CardTitle>
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
                    <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm transition-colors duration-200">Planned Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-200">
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
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 transition-colors duration-200">
            <CardContent className="p-8">
              <Plus className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-200">More Projects Coming Soon</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto transition-colors duration-200">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more exciting developments in backend systems, AI/ML applications, and enterprise solutions.
              </p>
              <Button asChild className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white">
                <a href="/contact">
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