import React from 'react';
import { Globe, Shield, MessageSquare, Zap, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multilingual Support",
    description: "Break language barriers with support for 100+ languages, enabling global business expansion.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Simple AI Training",
    description: "Effortless setup and training process that saves both time and resources.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Emotional Intelligence",
    description: "Advanced AI that understands and responds to customer emotions appropriately.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Scaling",
    description: "Handle unlimited concurrent calls without compromising quality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Round-the-clock customer support without any downtime.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Consistent Excellence",
    description: "Maintain high-quality interactions across all customer touchpoints.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to transform your customer interactions and scale your business globally
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}