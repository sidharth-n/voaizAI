import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Voaiz.ai transformed our customer support operations. The AI agents handle complex inquiries with remarkable precision and emotional intelligence.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    quote: "The multilingual capabilities helped us expand globally without hiring additional support staff. Our customer satisfaction rates have never been higher.",
    author: "Michael Rodriguez",
    role: "Operations Director",
    company: "GlobalTech Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    quote: "Since implementing Voaiz.ai, our response times improved by 70% and our customers are more satisfied than ever with the consistent service quality.",
    author: "Emma Thompson",
    role: "Customer Success Manager",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses are transforming their customer interactions with Voaiz.ai
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={item}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}