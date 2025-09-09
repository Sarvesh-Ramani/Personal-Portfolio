import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink } from "lucide-react";

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
      value: "Coimbatore, Tamil Nadu, India",
      action: null,
      actionText: null
    }
  ];

  const availability = {
    status: "Open to Opportunities",
    description: "Currently exploring new opportunities in backend development, microservices architecture, and AI/ML applications.",
    responseTime: "Usually responds within 24 hours",
    preferredContact: "Email or LinkedIn"
  };

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Weekend", hours: "Available for urgent matters" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-200">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and see how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Availability Status */}
            <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center transition-colors duration-200">
                  <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  {availability.status}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{availability.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Response Time: </span>
                    <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{availability.responseTime}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-200">Best Contact: </span>
                    <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{availability.preferredContact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-200">{contact.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-3 break-all transition-colors duration-200">{contact.value}</p>
                        {contact.action && (
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm"
                            className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
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

            {/* Professional Summary */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white transition-colors duration-200">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Technical Expertise</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 transition-colors duration-200">
                      <li>• 2+ years of backend development experience</li>
                      <li>• Proficient in Java, Spring Boot, and MongoDB</li>
                      <li>• Experience with microservices and REST APIs</li>
                      <li>• AI/ML research and deep learning projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Problem Solving</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 transition-colors duration-200">
                      <li>• Enterprise software development experience</li>
                      <li>• Research-oriented approach to solutions</li>
                      <li>• Strong analytical and debugging skills</li>
                      <li>• Cross-functional team collaboration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Working Hours */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-white transition-colors duration-200">Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900 dark:text-white transition-colors duration-200">{schedule.day}</span>
                    <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 transition-colors duration-200">
              <CardContent className="p-6 text-center space-y-4">
                <Download className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-200">Download Resume</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-200">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    disabled
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-white transition-colors duration-200">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Experience</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-200">2+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Current Role</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-200">Software Engineer II</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Specialization</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-200">Backend & AI/ML</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-200">Location</span>
                  <span className="font-medium text-slate-900 dark:text-white transition-colors duration-200">Coimbatore, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-slate-200 dark:border-slate-700 bg-slate-900 dark:bg-slate-950 text-white max-w-4xl mx-auto transition-colors duration-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="text-slate-300 dark:text-slate-400 mb-6 max-w-2xl mx-auto transition-colors duration-200">
                Whether you need backend development, AI/ML solutions, or enterprise software development, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="mailto:sarveshramani1004@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 dark:border-slate-500 text-slate-300 dark:text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors duration-200">
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