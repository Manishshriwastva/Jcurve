'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import ServiceProcess from '@/components/ServiceProcess';

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a comprehensive range of IT services designed to help your business thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="p-3 w-14 h-14 rounded-md bg-primary/10 text-primary mb-4 flex items-center justify-center">
                      <div dangerouslySetInnerHTML={{ __html: service.iconSvg }} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary text-lg">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={'/contact'}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <ServiceProcess />

      {/* Featured Projects */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Recent Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take a look at some of our successful client projects that showcase our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
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
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="#case-study">View Case Study</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="#all-projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Contact us today to discuss your project requirements and discover how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}