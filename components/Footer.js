'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const { toast } = useToast();
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Simulate subscription
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
      duration: 5000,
    });
    
    e.target.reset();
  };

  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-primary font-bold text-xl">
                Jcurve<span className="text-foreground">Technology</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Elevating businesses through innovative technology solutions since 2020.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Manishshriwastva@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 9123153528</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground"> sec-2 Noida UP, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { title: 'Home', href: '/' },
                { title: 'About Us', href: '/about' },
                { title: 'Services', href: '/services' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Contact', href: '/contact' },
                { title: 'Privacy Policy', href: '#privacy' },
                { title: 'Terms of Service', href: '#terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { title: 'Web Development', href: '/services/web-development' },
                { title: 'App Development', href: '/services/app-development' },
                { title: 'SEO Services', href: '/services/seo' },
                { title: 'UI/UX Design', href: '/services/ui-ux-design' },
                { title: 'IT Consulting', href: '/services/it-consulting' },
                { title: 'Maintenance & Support', href: '/services/maintenance' },
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="flex-grow"
                />
                <Button type="submit">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
            
            <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, href: '#facebook' },
                  { icon: <Twitter className="h-5 w-5" />, href: '#twitter' },
                  { icon: <Linkedin className="h-5 w-5" />, href: '#linkedin' },
                  { icon: <Instagram className="h-5 w-5" />, href: '#instagram' },
                  { icon: <Github className="h-5 w-5" />, href: '#github' },
                ].map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Jcurve Technology. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}