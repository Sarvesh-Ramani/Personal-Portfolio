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
      title: "Backend Developer",
      organization: "AppViewX",
      description: "Transitioned from core product development to SWAT engineering role, resolving critical issues and improving client retention."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate backend developer with a unique journey from mechanical engineering to software development, 
            driven by curiosity and a love for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardContent className="p-6 text-center space-y-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg"
                  alt="Sarvesh Ramani"
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Sarvesh Ramani</h2>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Backend Developer
                  </Badge>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>1.5+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Story */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My journey into software development began during my mechanical engineering studies at Coimbatore Institute of Technology. 
                  While studying the fundamentals of engineering, I discovered my passion for programming and problem-solving through code.
                </p>
                <p>
                  After graduating in 2023, I joined AppViewX as a Backend Developer, where I've spent 1.5+ years designing scalable 
                  microservices using Java and Spring Boot. My role evolved from core product development on SIGN+ to becoming part of 
                  the SWAT engineering team, where I resolve critical production issues with &lt;24h turnaround times.
                </p>
                <p>
                  What drives me is the intersection of traditional engineering principles with modern software development. 
                  I'm particularly excited about exploring AI/ML applications and how they can enhance backend services to create 
                  more intelligent, data-driven solutions.
                </p>
              </CardContent>
            </Card>

            {/* What I Do */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-blue-600" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Backend Development</h4>
                    <p className="text-sm">
                      Designing and building scalable microservices, REST APIs, and secure backend systems using Java, Spring Boot, and MongoDB.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Problem Solving</h4>
                    <p className="text-sm">
                      Resolving critical production issues with detailed root cause analysis and implementing preventive solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Client Collaboration</h4>
                    <p className="text-sm">
                      Working directly with enterprise clients to gather requirements and implement tailored solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">AI/ML Exploration</h4>
                    <p className="text-sm">
                      Exploring machine learning applications with TensorFlow and Scikit-learn to enhance backend capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journey.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 font-semibold mb-1">{item.year}</p>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 mb-2">{item.organization}</p>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{achievement.title}</h3>
                      <p className="text-slate-600 text-sm">{achievement.description}</p>
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