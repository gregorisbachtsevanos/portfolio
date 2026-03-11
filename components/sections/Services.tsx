'use client';

import { Code, Server, Zap, Cloud, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Application Development',
    description:
      'Custom web platforms built with React and Node.js. End-to-end solutions tailored to your business needs.',
  },
  {
    icon: Server,
    title: 'API Development & Backend Systems',
    description:
      'Secure and scalable backend services. REST APIs, authentication systems, and database architecture.',
  },
  {
    icon: Zap,
    title: 'Startup MVP Development',
    description:
      'Building the first version of your startup product quickly and efficiently. Get to market faster without sacrificing quality.',
  },
  {
    icon: Cloud,
    title: 'DevOps & Deployment',
    description:
      'Dockerized applications, Linux server configuration, and CI/CD pipelines for reliable deployments.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description:
      'Improving speed and scalability of existing applications. Comprehensive audits and optimizations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <service.icon className="text-blue-400" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
