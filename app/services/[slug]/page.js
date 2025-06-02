'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

export default function ServicePage() {
  const params = useParams();
  const [service, setService] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [relatedTestimonials, setRelatedTestimonials] = useState([]);

   

  useEffect(() => {
    if (params.slug) {
      const currentService = services.find(s => s.slug === params.slug);
      
      if (currentService) {
        setService(currentService);
        
        // Find related projects by category
        const related = projects.filter(
          p => p.category.toLowerCase() === currentService.title.toLowerCase()
        );
        setRelatedProjects(related.length ? related : projects.slice(0, 3));
        
        // Find related testimonials
        const relatedTest = testimonials.filter(
          t => t.service === currentService.title
        );
        setRelatedTestimonials(relatedTest.length ? relatedTest : testimonials.slice(0, 3));
      }
    }
  }, [params.slug]);

  if (!service) {
    return <div className="container mx-auto py-20 text-center">Loading...</div>;
  }
  

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{service.title}</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.longDescription || service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src={service.image || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Our {service.title} service is designed to help your business succeed with the following key features:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.featureDescriptions?.[feature] || 
                        "Our expert team ensures the highest quality standards in delivering this feature."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="approach" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="approach">Our Approach</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="approach" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our {service.title} Approach</h3>
                  <p className="text-muted-foreground mb-6">
                    We follow a systematic and client-centric approach to deliver exceptional {service.title} solutions 
                    that meet your business objectives and exceed your expectations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Users className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-medium">Client-Centric</h4>
                        <p className="text-muted-foreground">We put your needs and goals at the center of our approach.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-medium">Timely Delivery</h4>
                        <p className="text-muted-foreground">We adhere to strict timelines to deliver projects on schedule.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Award className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-medium">Quality Assured</h4>
                        <p className="text-muted-foreground">We maintain the highest quality standards in all our deliverables.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Our approach" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">Our {service.title} Process</h3>
                
                <div className="space-y-12">
                  {[
                    { 
                      step: 1, 
                      title: 'Discovery & Analysis', 
                      description: 'We start by understanding your business goals, target audience, and project requirements.' 
                    },
                    { 
                      step: 2, 
                      title: 'Strategy & Planning', 
                      description: 'Our team develops a comprehensive strategy and detailed project plan.' 
                    },
                    { 
                      step: 3, 
                      title: 'Design & Development', 
                      description: 'We create and implement solutions with a focus on quality and innovation.' 
                    },
                    { 
                      step: 4, 
                      title: 'Testing & Refinement', 
                      description: 'Thorough testing ensures your solution works flawlessly across all environments.' 
                    },
                    { 
                      step: 5, 
                      title: 'Deployment & Support', 
                      description: 'We deploy your solution and provide ongoing support and maintenance.' 
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start"
                    >
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl md:col-span-1">
                        {item.step}
                      </div>
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      {index < 4 && (
                        <div className="absolute left-6 top-12 h-full md:left-6 md:h-12 md:top-6 md:w-full">
                          <div className="h-full w-px md:h-px md:w-full bg-border"></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="technology" className="mt-6">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-8">Technologies We Use</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {(service.technologies || [
                    "React", "Next.js", "Node.js", "MongoDB", 
                    "AWS", "PostgreSQL", "TypeScript", "Python"
                  ]).map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="font-medium">{tech}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies / Projects */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our {service.title} Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our successful {service.title} projects and see how we've helped businesses achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-muted text-xs font-medium rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.result}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {relatedTestimonials.length > 0 && (
        <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Client Feedback
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See what our clients have to say about our {service.title} services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.position}, {testimonial.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started with {service.title}?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Contact us today to discuss your project requirements and discover how our {service.title} services 
                  can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}