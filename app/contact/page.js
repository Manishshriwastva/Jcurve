'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or ready to start your project? Reach out to us and our team will get back to you shortly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">For general inquiries:</p>
                    <p className="font-medium">info@jcurve.com</p>
                    <p className="text-muted-foreground mt-2 mb-1">For support:</p>
                    <p className="font-medium">Manishshriwastva@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Mon-Fri, 9am-5pm EST:</p>
                    <p className="font-medium">+91 8709011582</p>
                    <p className="text-muted-foreground mt-2 mb-1">24/7 Support:</p>
                    <p className="font-medium">+91 9123153528</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Office Location</h3>
                    <p className="text-muted-foreground mb-1">Headquarters:</p>
                    <p className="font-medium">Sec-2 Noida 201301</p>
                    <p className="font-medium">Uttar Pradesh (India)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="w-full mb-6">
                      <TabsTrigger value="contact" className="flex-1">Contact Us</TabsTrigger>
                      <TabsTrigger value="support" className="flex-1">Support</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="contact">
                      <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                      
                      {isSubmitted ? (
                        <div className="text-center py-8">
                          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                          <p className="text-muted-foreground">
                            Thank you for contacting us. We'll get back to you as soon as possible.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name</Label>
                              <Input 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name" 
                                required 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email" 
                                required 
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone (Optional)</Label>
                              <Input 
                                id="phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 **********" 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Company (Optional)</Label>
                              <Input 
                                id="company" 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your Company Name" 
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="service">Service You're Interested In</Label>
                            <select 
                              id="service" 
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                              required
                            >
                              <option value="">Select a service</option>
                              <option value="Web Development">Web Development</option>
                              <option value="App Development">App Development</option>
                              <option value="SEO">SEO</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input 
                              id="subject" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Project Inquiry" 
                              required 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea 
                              id="message" 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Please provide details about your project or inquiry..." 
                              rows={5} 
                              required 
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </form>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="support">
                      <h2 className="text-xl font-bold mb-6">Get Support</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="support-name">Name</Label>
                            <Input 
                              id="support-name" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="support-email">Email</Label>
                            <Input 
                              id="support-email" 
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com" 
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="support-subject">Subject</Label>
                          <Input 
                            id="support-subject" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Support Request" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="support-message">Describe Your Issue</Label>
                          <Textarea 
                            id="support-message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please provide details about the issue you're experiencing..." 
                            rows={5} 
                            required 
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Support Request"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We'd love to meet you in person. Visit our headquarters in San Francisco.
              </p>
            </motion.div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            {/* Replace with an actual map or embed Google Maps */}
            <div className="aspect-video bg-muted relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.647118705166!2d77.3837351831829!3d28.614151251629178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cf2b59ee1%3A0x683baf1952b64adb!2s78%2C%20C%20Block%20Road%2C%20B%20Block%2C%20Sector%2065%2C%20Noida%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1748886447678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about working with us.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "What is the typical timeline for a web development project?",
                answer: "The timeline varies depending on the project's complexity. A simple website may take 4-6 weeks, while more complex web applications can take 3-6 months. We'll provide a detailed timeline during the consultation phase."
              },
              {
                question: "Do you offer maintenance and support after project completion?",
                answer: "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and functioning optimally. Our support team is available 24/7 for critical issues."
              },
              {
                question: "How do you handle project revisions and feedback?",
                answer: "We incorporate feedback loops throughout the development process. Each project phase includes dedicated review periods where you can provide feedback. We typically include two rounds of revisions in our standard packages."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in a wide range of technologies including React, Next.js, Node.js, Python, Laravel, AWS, and more. Our technology recommendations are always based on your specific project requirements."
              },
              {
                question: "Do you offer fixed-price contracts or hourly billing?",
                answer: "We offer both options. For well-defined projects, we typically work with fixed-price contracts. For ongoing development or projects with evolving requirements, hourly billing might be more suitable."
              },
              {
                question: "Can you help with existing projects or only new ones?",
                answer: "We're experienced in taking over existing projects. Our team can audit your current codebase and infrastructure, then develop a plan to maintain, improve, or completely overhaul it based on your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 bg-card rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}