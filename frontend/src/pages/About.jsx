import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Award, Target, Trophy, Star, Sparkles } from "lucide-react";

const About = () => {
  const achievements = [
    {
      title: "AWS Educate Machine Learning Foundations (2025)",
      description: "Completed AWS certification focusing on artificial intelligence and machine learning fundamentals.",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "ML Research Intern Certification (2024)",
      description: "Certified completion of ML Research Internship at Spartificial with expertise in AI, ML, and Deep Learning.",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const journey = [
    {
      year: "2019 - 2023",
      title: "B.E Mechanical Engineering",
      organization: "Coimbatore Institute of Technology",
      description: "Graduated with strong foundation in engineering principles, transitioning to software development during final year."
    },
    {
      year: "2023 - Present",
      title: "Software Engineer II",
      organization: "AppViewX",
      description: "Evolved from R&D intern to Software Engineer II, specializing in backend development and enterprise solutions."
    },
    {
      year: "2024",
      title: "ML Research Intern",
      organization: "Spartificial",
      description: "Worked on GravitySpy Glitch Classification using Deep Learning, contributing to astronomical data science research."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            A passionate software engineer with a unique journey from mechanical engineering to backend development, 
            driven by curiosity and a love for solving complex problems through elegant code.
          </p>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Profile Image and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg"
                  alt="Sarvesh Ramani"
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-white dark:border-slate-700 shadow-xl"
                />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Sarvesh Ramani</h2>
                  <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 px-4 py-2">
                    Software Engineer II
                  </Badge>
                </div>
                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Story */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                <p>
                  My journey into software development began during my mechanical engineering studies at Coimbatore Institute of Technology. 
                  While mastering engineering fundamentals, I discovered my passion for programming and problem-solving through code.
                </p>
                <p>
                  After graduating in 2023, I joined AppViewX as an R&D Intern, quickly transitioning to Software Engineer II. 
                  Over 2+ years, I've specialized in designing scalable backend systems using Java and Spring Boot, contributing to 
                  enterprise solutions and leading critical development initiatives.
                </p>
                <p>
                  My curiosity extends beyond traditional backend development. Through my ML Research Internship at Spartificial, 
                  I've explored the fascinating intersection of AI/ML and software engineering, working on projects like GravitySpy 
                  Glitch Classification that push the boundaries of what's possible with intelligent systems.
                </p>
              </CardContent>
            </Card>

            {/* What I Do */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center transition-colors duration-300">
                  <Target className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Backend Engineering</h4>
                    <p className="text-sm leading-relaxed">
                      Architecting scalable microservices, RESTful APIs, and secure backend systems using modern Java frameworks and cloud technologies.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">AI/ML Research</h4>
                    <p className="text-sm leading-relaxed">
                      Exploring machine learning applications, deep learning models, and intelligent data processing systems for real-world impact.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Enterprise Solutions</h4>
                    <p className="text-sm leading-relaxed">
                      Developing enterprise-grade applications with PKI integration, security protocols, and scalable architecture patterns.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Problem Solving</h4>
                    <p className="text-sm leading-relaxed">
                      Analyzing complex technical challenges and implementing elegant, maintainable solutions with attention to performance and user experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journey.map((item, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                      <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">{item.year}</p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 transition-colors duration-300">{item.organization}</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{achievement.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;