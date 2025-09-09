import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sarveshramani1004@gmail.com",
      action: "mailto:sarveshramani1004@gmail.com",
      actionText: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 8939072479",
      action: "tel:+918939072479",
      actionText: "Call Now"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sarvesh-ramani",
      action: "https://www.linkedin.com/in/sarvesh-ramani",
      actionText: "View Profile"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      action: null,
      actionText: null
    }
  ];

  const availability = {
    status: "Open to Opportunities",
    description: "Currently exploring new opportunities in backend development, microservices architecture, and AI/ML applications. Always excited to discuss innovative projects and collaborations.",
    responseTime: "Usually responds within 24 hours",
    preferredContact: "Email or LinkedIn"
  };

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Weekend", hours: "Available for urgent matters" }
  ];

  const expertise = [
    {
      title: "Backend Engineering",
      items: ["Java & Spring Boot", "Microservices Architecture", "REST API Development", "Database Design"]
    },
    {
      title: "AI/ML Research",
      items: ["Deep Learning Models", "Data Science", "TensorFlow & Python", "Research Publications"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and see how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-10">
            {/* Availability Status */}
            <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center transition-colors duration-300">
                  <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  {availability.status}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{availability.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Response Time: </span>
                      <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">{availability.responseTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Best Contact: </span>
                      <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">{availability.preferredContact}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{contact.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 break-all transition-colors duration-300">{contact.value}</p>
                        {contact.action && (
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm"
                            className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                          >
                            <a 
                              href={contact.action} 
                              target={contact.title === "LinkedIn" ? "_blank" : "_self"}
                              rel={contact.title === "LinkedIn" ? "noopener noreferrer" : ""}
                            >
                              {contact.actionText}
                              {contact.title === "LinkedIn" && <ExternalLink className="ml-2 h-4 w-4" />}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Expertise Summary */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {expertise.map((area, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">{area.title}</h4>
                      <ul className="space-y-2">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Working Hours */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">{schedule.day}</span>
                    <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-blue-900/10 dark:to-slate-800/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                  <Download className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Download Resume</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-300">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                    disabled
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Experience</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">2+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Current Role</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">Software Engineer II</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Specialization</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">Backend & AI/ML</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Location</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">Chennai, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="border-slate-200 dark:border-slate-700 bg-slate-900 dark:bg-slate-950 text-white max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Start a Project?</h2>
              <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Whether you need backend development, AI/ML solutions, or enterprise software development, 
                I'm here to help bring your ideas to life with clean, efficient, and scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="mailto:sarveshramani1004@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 dark:border-slate-500 text-slate-300 dark:text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/sarvesh-ramani" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;