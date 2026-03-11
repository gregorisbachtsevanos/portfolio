'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Authentication Platform',
    description:
      'Secure authentication backend handling machine tokens, refresh tokens, and access tokens for multiple applications. Built with industry-standard security practices.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    result: 'Handles 10k+ daily auth requests',
  },
  {
    title: 'Task Management Platform',
    description:
      'Full-stack project and task management system with projects, groups, tasks, and subtasks. Complete with real-time updates and collaborative features.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
    result: 'Improved team productivity by 40%',
  },
  {
    title: 'Developer Dashboard',
    description:
      'Modern analytics dashboard with advanced state management and API integrations. Real-time data visualization and performance metrics.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Vite'],
    result: 'Processes 100k+ data points/day',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recent work showcasing full-stack development and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-cyan-400 font-medium">
                    {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
