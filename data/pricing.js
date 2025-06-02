export const pricing = {
  web: {
    plans: [
      {
        name: "Basic",
        price: 999,
        description: "Perfect for small businesses and startups",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form",
          "Basic SEO setup",
          "Google Analytics integration",
          "30 days of support",
        ],
        notIncluded: [
          "Content management system",
          "E-commerce functionality",
          "Custom design"
        ],
        popular: false
      },
      {
        name: "Professional",
        price: 2499,
        description: "Ideal for growing businesses",
        features: [
          "Up to 10 pages",
          "Responsive design",
          "Contact form",
          "Content management system",
          "Advanced SEO setup",
          "Google Analytics integration",
          "Social media integration",
          "60 days of support",
          "1 hour of training"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        description: "For established businesses with complex needs",
        features: [
          "Unlimited pages",
          "Responsive design",
          "Custom design",
          "Advanced CMS",
          "E-commerce functionality",
          "Comprehensive SEO package",
          "Analytics dashboard",
          "Social media integration",
          "90 days of support",
          "3 hours of training"
        ],
        popular: false
      }
    ]
  },
  app: {
    plans: [
      {
        name: "Starter",
        price: 4999,
        description: "Basic mobile app for simple use cases",
        features: [
          "Single platform (iOS or Android)",
          "Up to 5 screens",
          "Basic UI design",
          "User authentication",
          "Push notifications",
          "30 days of support",
        ],
        notIncluded: [
          "Custom animations",
          "API integrations",
          "Admin dashboard"
        ],
        popular: false
      },
      {
        name: "Growth",
        price: 9999,
        description: "Comprehensive app for growing businesses",
        features: [
          "Both iOS and Android platforms",
          "Up to 10 screens",
          "Custom UI/UX design",
          "User authentication",
          "Push notifications",
          "Basic analytics",
          "2 API integrations",
          "Admin dashboard",
          "60 days of support"
        ],
        popular: true
      },
      {
        name: "Pro",
        price: 19999,
        description: "Full-featured app solution for enterprises",
        features: [
          "Both iOS and Android platforms",
          "Unlimited screens",
          "Premium UI/UX design",
          "Advanced user management",
          "Comprehensive analytics",
          "Unlimited API integrations",
          "Advanced admin dashboard",
          "Offline functionality",
          "Custom animations",
          "90 days of support"
        ],
        popular: false
      }
    ]
  },
  seo: {
    plans: [
      {
        name: "Essential",
        price: 799,
        description: "Basic SEO package for small websites",
        features: [
          "Keyword research (10 keywords)",
          "On-page optimization",
          "Basic technical SEO",
          "Google My Business setup",
          "Monthly reporting",
          "3-month contract"
        ],
        notIncluded: [
          "Content creation",
          "Link building",
          "Local SEO"
        ],
        popular: false
      },
      {
        name: "Growth",
        price: 1499,
        description: "Comprehensive SEO for growing businesses",
        features: [
          "Keyword research (25 keywords)",
          "On-page optimization",
          "Advanced technical SEO",
          "Content optimization",
          "Basic link building (5/month)",
          "Local SEO",
          "Bi-weekly reporting",
          "6-month contract"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: 2999,
        description: "Enterprise-level SEO services",
        features: [
          "Keyword research (50+ keywords)",
          "Comprehensive on-page optimization",
          "Advanced technical SEO",
          "Content strategy & creation",
          "Advanced link building (15/month)",
          "International SEO",
          "Local SEO",
          "Competitor analysis",
          "Weekly reporting",
          "12-month contract"
        ],
        popular: false
      }
    ]
  }
};