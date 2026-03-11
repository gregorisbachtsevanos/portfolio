'use client';

import { CircleCheck as CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Clean and Maintainable Code',
    description:
      'Following best practices and industry standards to ensure your codebase stays manageable as it grows.',
  },
  {
    title: 'Focus on Scalability',
    description:
      'Architecture designed to handle growth. Built to scale from MVP to enterprise.',
  },
  {
    title: 'Production-Ready Architecture',
    description:
      'Every project is built with production in mind. Security, performance, and reliability from day one.',
  },
  {
    title: 'Strong Backend and Frontend Expertise',
    description:
      'Full-stack capabilities mean seamless integration between your frontend and backend systems.',
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering excellence through proven principles and practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
