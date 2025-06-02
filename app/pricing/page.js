'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, X, ArrowRight, Shield, Clock, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pricing } from '@/data/pricing';
import PricingCalculator from '@/components/PricingCalculator';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const handleBillingToggle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  const getPrice = (plan, service) => {
    const serviceData = pricing[service] || pricing.default;
    const planData = serviceData.plans.find(p => p.name === plan);
    return billingCycle === 'monthly' ? planData.price : Math.floor(planData.price * 10.8);
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
                Transparent, Flexible Pricing
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the perfect plan for your business needs, with no hidden fees or surprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-16">
            <div className="flex items-center gap-4">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <div className="flex items-center">
                <Switch
                  checked={billingCycle === 'annual'}
                  onCheckedChange={handleBillingToggle}
                  id="billing-toggle"
                />
                <Label htmlFor="billing-toggle" className="sr-only">
                  Toggle billing cycle
                </Label>
              </div>
              <span className={`text-lg flex items-center gap-2 ${billingCycle === 'annual' ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                Annually
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  Save 10%
                </span>
              </span>
            </div>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="app">App Development</TabsTrigger>
                <TabsTrigger value="seo">SEO Services</TabsTrigger>
              </TabsList>
            </div>
            
            {['web', 'app', 'seo'].map((service) => (
              <TabsContent key={service} value={service} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricing[service]?.plans.map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex"
                    >
                      <Card className={`w-full flex flex-col ${plan.popular ? 'border-primary shadow-md relative' : ''}`}>
                        {plan.popular && (
                          <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                            Most Popular
                          </div>
                        )}
                        
                        <CardHeader className={`${plan.popular ? 'pb-8' : ''}`}>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription className="mt-2">{plan.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow">
                          <div className="mb-6">
                            <p className="text-4xl font-bold">
                              ${billingCycle === 'monthly' ? plan.price : Math.floor(plan.price * 10.8)}
                              <span className="text-muted-foreground text-base font-normal">
                                /{billingCycle === 'monthly' ? 'month' : 'year'}
                              </span>
                            </p>
                            {billingCycle === 'annual' && (
                              <p className="text-sm text-muted-foreground">
                                Save ${Math.floor(plan.price * 1.2)} with annual billing
                              </p>
                            )}
                          </div>
                          
                          <div className="space-y-4">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            
                            {plan.notIncluded?.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <X className="h-5 w-5 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        
                        <CardFooter>
                          <Button 
                            className="w-full" 
                            variant={plan.popular ? "default" : "outline"} 
                            size="lg"
                            asChild
                          >
                            <Link href="/contact">
                              {plan.popular ? "Get Started" : "Contact Us"}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    Need a custom solution? Contact us for a tailored quote.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Request Custom Quote</Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Pricing Calculator */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Custom Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Project Cost Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get an estimate for your custom project by selecting the features and options you need.
              </p>
            </motion.div>
          </div>

          <PricingCalculator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide exceptional value with every plan.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Quality Guarantee",
                description: "Our work is backed by a satisfaction guarantee. We're not happy until you're happy with the final product."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "On-Time Delivery",
                description: "We understand the importance of timelines and are committed to delivering your projects on schedule."
              },
              {
                icon: <LifeBuoy className="h-8 w-8 text-primary" />,
                title: "Dedicated Support",
                description: "Every client receives dedicated support from our expert team, ensuring smooth project execution."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
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
                Pricing Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our pricing and plans.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No, our pricing is completely transparent. The price you see is the price you pay, with no hidden fees or surprises. Any additional services will be discussed and agreed upon before implementation."
              },
              {
                question: "Can I upgrade or downgrade my plan later?",
                answer: "Yes, you can easily upgrade or downgrade your plan at any time. If you upgrade, we'll prorate the difference. If you downgrade, the new rate will apply at the start of your next billing cycle."
              },
              {
                question: "Do you offer discounts for startups or non-profits?",
                answer: "Yes, we offer special pricing for eligible startups and non-profit organizations. Please contact us with details about your organization to learn more about our discount programs."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept major credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. For enterprise clients, we can also arrange other payment methods."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "We offer a satisfaction guarantee for our services. If you're not satisfied with our work, we'll work with you to make it right or provide a partial refund depending on the project stage."
              },
              {
                question: "Do you offer custom pricing for larger projects?",
                answer: "Yes, for larger or more complex projects, we offer custom pricing tailored to your specific requirements. Contact us to discuss your project needs and receive a personalized quote."
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

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Contact us today to discuss your project requirements and find the perfect plan for your business.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}