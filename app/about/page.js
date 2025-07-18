'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { team } from '@/data/team';

 

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  About Jcurve Technology ,
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  We're a team of passionate tech enthusiasts dedicated to helping businesses succeed in the digital world. 
                  With years of experience and a commitment to excellence, we deliver innovative IT solutions 
                  tailored to your unique needs.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team members collaborating"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Company founding"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                  Est. 2020
                </div>
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Startup to Industry Leader
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020, Jcurve Technology began as a small team of tech enthusiasts with a shared vision: to help businesses 
                    harness the power of technology to achieve their goals.
                  </p>
                  <p>
                    What started as a boutique web development agency quickly expanded into a comprehensive IT solutions provider. 
                    As we delivered successful project after successful project, our reputation for excellence grew, as did our team.
                  </p>
                  <p>
                    Today, Jcurve Technology stands as a trusted partner for businesses of all sizes, from startups to enterprise corporations, 
                    across various industries. Our commitment to innovation, quality, and client satisfaction remains the cornerstone 
                    of everything we do.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our core values shape our culture and guide how we work with clients, partners, and each other.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, maintaining the highest standards of quality in our work and interactions."
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices, building trust with our clients through every interaction."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, both internally and with our clients, to achieve the best possible outcomes."
              },
              {
                title: "Client Success",
                description: "Our success is measured by our clients' success. We're committed to helping our clients achieve their business goals."
              },
              {
                title: "Continuous Learning",
                description: "We embrace a culture of learning and growth, constantly expanding our knowledge to offer the best solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Experts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our talented team of professionals brings diverse skills and expertise to deliver exceptional results.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-lg bg-muted/30">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">{member.name}</h3>
                      <p className="text-white/90 text-sm">{member.position}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Jcueve Technology By The Numbers
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our growth and success reflect our commitment to excellence and client satisfaction.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Clients", value: "150+" },
              { label: "Projects Completed", value: "300+" },
              { label: "Team Members", value: "40+" },
              { label: "Years in Business", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-12 bg-background relative overflow-hidden">
  <div className="max-w-5xl mx-auto text-center mb-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1 bg-secondary/10 text-white font-semibold rounded-full mb-4">
        Our Journey
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary drop-shadow-xl">
        Company Timeline
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        A logical ascent into innovation — visualized as a 3D climb.
      </p>
    </motion.div>
  </div>

  <div className="relative max-w-5xl mx-auto">
    {/* Central vertical line */}
    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-border z-0" />

    <div className="flex flex-col gap-20 relative z-10">
      {[
        {
          year: "2020",
          title: "Foundation",
          description: "Jcurve was founded with a vision to help businesses leverage technology for growth.",
        },
        {
          year: "2021",
          title: "Expansion",
          description: "We expanded our service offerings and doubled our team size to meet growing client demands.",
        },
        {
          year: "2022",
          title: "New Office",
          description: "Opened our new headquarters and expanded to international markets.",
        },
        {
          year: "2023",
          title: "Strategic Partnerships",
          description: "Formed strategic partnerships with leading technology providers to enhance our service offerings.",
        },
        {
          year: "2024",
          title: "Industry Recognition",
          description: "Received multiple industry awards for innovation and client satisfaction.",
        },
        {
          year: "2025",
          title: "Global Presence",
          description: "Established offices in multiple countries to better serve our global client base.",
        },
      ].map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`
              relative w-full max-w-[45%] p-6 rounded-2xl bg-white/10 border border-border shadow-xl
              backdrop-blur-md transform-gpu
              ${isLeft ? 'self-start ml-0' : 'self-end mr-0'}
              ${isLeft ? 'origin-left' : 'origin-right'}
            `}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full shadow text-sm font-semibold">
              {event.year}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
            {/* Connector Dot */}
            <div className={`absolute top-1/2 w-4 h-4 bg-red-600 rounded-full shadow border border-white
              ${isLeft ? '-right-2' : '-left-2'}`}></div>
          </motion.div>
        );
      })}
    </div>

    {/* Glowing backdrop effect */}
    <div className="absolute top-10 -left-40 w-[300px] h-[300px] bg-red-600/20 blur-[120px] rounded-full z-0"></div>
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full z-0"></div>
  </div>
</section>



      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Contact our team today to discuss how we can help your business succeed with our IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}