'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterSignup({ darkMode = false }) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
        duration: 5000,
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl ${darkMode ? 'bg-primary-foreground/10' : 'bg-muted/50'}`}
    >
      <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-primary-foreground' : ''}`}>
        Subscribe to Our Newsletter
      </h3>
      <p className={`mb-6 ${darkMode ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
        Stay updated with our latest news, articles, and special offers.
      </p>
      
      {isSubmitted ? (
        <div className="text-center py-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <p className={`font-medium ${darkMode ? 'text-primary-foreground' : ''}`}>
            Thank you for subscribing!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className={`flex-grow ${darkMode ? 'bg-primary-foreground/5 border-primary-foreground/20 placeholder:text-primary-foreground/50' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              variant={darkMode ? "secondary" : "default"}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Subscribing..."
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className={`text-xs ${darkMode ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      )}
    </motion.div>
  );
}