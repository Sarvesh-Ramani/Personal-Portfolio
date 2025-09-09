import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      title: "SPOT Award (2023)",
      description: "Awarded the quarterly SPOT award for consistently resolving customer issues and ensuring timely delivery.",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Excellence Award (2023-24)",
      description: "Received the Certificate of Excellence for consistent delivery and continuous efforts on delivering the best output.",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const journey = [
    {
      year: "2019 - 2023",
      title: "B.E Mechanical Engineering",
      organization: "Coimbatore Institute of Technology",
      description: "Graduated with a strong foundation in engineering principles and problem-solving methodologies."
    },
    {
      year: "2023 - Present",
      title: "Software Engineer II",
      organization: "AppViewX",
      description: "Transitioned from R&D intern to full-time Software Engineer II, developing enterprise backend solutions and resolving critical production issues."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
            A passionate backend developer with a unique journey from mechanical engineering to software development, 
            driven by curiosity and a love for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardContent className="p-6 text-center space-y-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg"
                  alt="Sarvesh Ramani"
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-white dark:border-slate-700 shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Sarvesh Ramani</h2>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200">
                    Software Engineer II
                  </Badge>
                </div>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Story */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white transition-colors duration-200">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-200">
                <p>
                  My journey into software development began during my mechanical engineering studies at Coimbatore Institute of Technology. 
                  While studying the fundamentals of engineering, I discovered my passion for programming and problem-solving through code.
                </p>
                <p>
                  After graduating in 2023, I joined AppViewX as an R&D Intern, quickly transitioning to Software Engineer II. 
                  I've now spent 2+ years designing scalable microservices using Java and Spring Boot, working on enterprise solutions,
                  and contributing to both product development and critical issue resolution.
                </p>
                <p>
                  What drives me is the intersection of traditional engineering principles with modern software development. 
                  I'm particularly excited about exploring AI/ML applications, having worked on projects like GravitySpy Glitch Classification
                  and continuously learning about how AI can enhance backend services.
                </p>
              </CardContent>
            </Card>

            {/* What I Do */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center transition-colors duration-200">
                  <Target className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300 transition-colors duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Backend Development</h4>
                    <p className="text-sm">
                      Designing and building scalable microservices, REST APIs, and secure backend systems using Java, Spring Boot, and MongoDB.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Problem Solving</h4>
                    <p className="text-sm">
                      Resolving critical production issues with detailed root cause analysis and implementing preventive solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">AI/ML Research</h4>
                    <p className="text-sm">
                      Working on machine learning projects like GravitySpy Glitch Classification and exploring AI applications in backend systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Enterprise Solutions</h4>
                    <p className="text-sm">
                      Developing enterprise-grade solutions with PKI integration, security protocols, and scalable architecture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-200">My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journey.map((item, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{item.year}</p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-200">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 transition-colors duration-200">{item.organization}</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-200">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">{achievement.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">{achievement.description}</p>
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