'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, []);
  
  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextTestimonial]);
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary/40 mx-auto mb-6" />
                  
                  <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-bold text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">
                        {testimonials[current].position}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="h-10 w-10 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? 'w-6 bg-primary' : 'w-2.5 bg-primary/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="h-10 w-10 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}