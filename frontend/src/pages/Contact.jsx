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
      value: "India",
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
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and see how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Availability Status */}
            <Card className="border-slate-200 bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  {availability.status}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{availability.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-slate-900">Response Time: </span>
                    <span className="text-slate-600">{availability.responseTime}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Best Contact: </span>
                    <span className="text-slate-600">{availability.preferredContact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{contact.title}</h3>
                        <p className="text-slate-600 mb-3 break-all">{contact.value}</p>
                        {contact.action && (
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm"
                            className="text-blue-600 border-blue-200 hover:bg-blue-50"
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
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Technical Expertise</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 1.5+ years of backend development experience</li>
                      <li>• Proficient in Java, Spring Boot, and MongoDB</li>
                      <li>• Experience with microservices and REST APIs</li>
                      <li>• Exploring AI/ML applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Problem Solving</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Resolved 50+ critical production issues</li>
                      <li>• &lt;24h turnaround time for urgent matters</li>
                      <li>• Strong analytical and debugging skills</li>
                      <li>• Enterprise client collaboration experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Working Hours */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900">{schedule.day}</span>
                    <span className="text-slate-600">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="p-6 text-center space-y-4">
                <Download className="h-12 w-12 text-blue-600 mx-auto" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Download Resume</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                    disabled
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Experience</span>
                  <span className="font-medium text-slate-900">1.5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Specialization</span>
                  <span className="font-medium text-slate-900">Backend Dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Industries</span>
                  <span className="font-medium text-slate-900">Enterprise</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Interests</span>
                  <span className="font-medium text-slate-900">AI/ML</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-slate-200 bg-slate-900 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Whether you need backend development, system architecture consultation, or AI/ML integration, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:sarveshramani1004@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
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