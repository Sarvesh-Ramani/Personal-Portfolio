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
        return "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700";
      case "In Planning":
        return "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700";
      case "Coming Soon":
        return "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      case "Concept":
        return "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700";
      default:
        return "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Machine Learning":
        return "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "Backend Development":
        return "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700";
      case "Full Stack":
        return "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700";
      case "AI/ML":
        return "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700";
      default:
        return "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600";
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
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
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
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Projects & Work
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            A showcase of my technical projects, from machine learning research to enterprise backend systems, 
            demonstrating expertise across diverse domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 transition-colors duration-300">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${
                      project.category === "Machine Learning" ? "bg-gradient-to-br from-orange-500 to-orange-600" : "bg-gradient-to-br from-blue-500 to-blue-600"
                    }`}>
                      {getProjectIcon(project.category)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">{project.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Key Highlights</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" disabled className="text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-600">
                      <Github className="h-4 w-4 mr-2" />
                      Private Repo
                    </Button>
                    <Button variant="outline" size="sm" disabled className="text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-600">
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 transition-colors duration-300">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md ${
                        project.category === "AI/ML" ? "bg-gradient-to-br from-purple-500 to-purple-600" :
                        project.category === "Full Stack" ? "bg-gradient-to-br from-green-500 to-green-600" : 
                        "bg-gradient-to-br from-blue-500 to-blue-600"
                      }`}>
                        {getProjectIcon(project.category)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
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
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm transition-colors duration-300">Planned Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 transition-colors duration-300">
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
        <div className="mt-20 text-center">
          <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-blue-900/10 dark:to-slate-800/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <Plus className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">More Projects Coming Soon</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more exciting developments in backend systems, AI/ML applications, and enterprise solutions.
              </p>
              <Button asChild className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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