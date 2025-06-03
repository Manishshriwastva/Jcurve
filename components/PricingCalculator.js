'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PricingCalculator() {
  const [formData, setFormData] = useState({
    service: 'webDevelopment',
    pages: 5,
    custom: false,
    responsive: true,
    cms: false,
    ecommerce: false,
    seo: false,
    hosting: false,
    maintenance: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleToggleChange = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name],
    });
  };

  // Calculate price based on options
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price by service type
    switch (formData.service) {
      case 'webDevelopment':
        basePrice = 1000 + (formData.pages * 150);
        break;
      case 'appDevelopment':
        basePrice = 5000;
        break;
      case 'seo':
        basePrice = 800;
        break;
      default:
        basePrice = 1000;
    }
    
    // Add costs for additional features
    if (formData.custom) basePrice += 2000;
    if (formData.responsive) basePrice += 500;
    if (formData.cms) basePrice += 1000;
    if (formData.ecommerce) basePrice += 2500;
    if (formData.seo) basePrice += 800;
    if (formData.hosting) basePrice += 300;
    if (formData.maintenance) basePrice += 500;
    
    return basePrice;
  };
  
  const price = calculatePrice();

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl">Project Cost Estimator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="webDevelopment">Web Development</option>
                <option value="appDevelopment">App Development</option>
                <option value="seo">SEO Services</option>
              </select>
            </div>
            
            {formData.service === 'webDevelopment' && (
              <div className="space-y-2">
                <Label htmlFor="pages">Number of Pages</Label>
                <Input
                  id="pages"
                  name="pages"
                  type="number"
                  min="1"
                  value={formData.pages}
                  onChange={handleChange}
                />
              </div>
            )}
            
            <div className="space-y-4">
              <Label>Additional Features</Label>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="custom">Custom Design</Label>
                  <p className="text-xs text-muted-foreground">Unique design tailored to your brand</p>
                </div>
                <Switch
                  id="custom"
                  checked={formData.custom}
                  onCheckedChange={() => handleToggleChange('custom')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="responsive">Responsive Design</Label>
                  <p className="text-xs text-muted-foreground">Works on all devices and screen sizes</p>
                </div>
                <Switch
                  id="responsive"
                  checked={formData.responsive}
                  onCheckedChange={() => handleToggleChange('responsive')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="cms">Content Management System</Label>
                  <p className="text-xs text-muted-foreground">Easily update your content</p>
                </div>
                <Switch
                  id="cms"
                  checked={formData.cms}
                  onCheckedChange={() => handleToggleChange('cms')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="ecommerce">E-commerce Functionality</Label>
                  <p className="text-xs text-muted-foreground">Sell products or services online</p>
                </div>
                <Switch
                  id="ecommerce"
                  checked={formData.ecommerce}
                  onCheckedChange={() => handleToggleChange('ecommerce')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="seo">SEO Optimization</Label>
                  <p className="text-xs text-muted-foreground">Improve search engine ranking</p>
                </div>
                <Switch
                  id="seo"
                  checked={formData.seo}
                  onCheckedChange={() => handleToggleChange('seo')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="hosting">Hosting Setup</Label>
                  <p className="text-xs text-muted-foreground">Server configuration and deployment</p>
                </div>
                <Switch
                  id="hosting"
                  checked={formData.hosting}
                  onCheckedChange={() => handleToggleChange('hosting')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance">Maintenance Plan</Label>
                  <p className="text-xs text-muted-foreground">Monthly updates and support</p>
                </div>
                <Switch
                  id="maintenance"
                  checked={formData.maintenance}
                  onCheckedChange={() => handleToggleChange('maintenance')}
                />
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">Estimated Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <motion.div
                    key={price}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-4xl font-bold">Rs {price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This is an estimate. Final pricing may vary based on specific requirements.
                    </p>
                  </motion.div>
                  
                  <div className="pt-4 space-y-4">
                    <h4 className="font-medium">Included in this estimate:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {formData.service === 'webDevelopment' 
                          ? `${formData.pages} page website development` 
                          : formData.service === 'appDevelopment'
                            ? 'Mobile application development'
                            : 'SEO services package'}
                      </li>
                      {formData.custom && <li>• Custom design</li>}
                      {formData.responsive && <li>• Responsive design</li>}
                      {formData.cms && <li>• Content management system</li>}
                      {formData.ecommerce && <li>• E-commerce functionality</li>}
                      {formData.seo && <li>• SEO optimization</li>}
                      {formData.hosting && <li>• Hosting setup</li>}
                      {formData.maintenance && <li>• 1-month maintenance plan</li>}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}