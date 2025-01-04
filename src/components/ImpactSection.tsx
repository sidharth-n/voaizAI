import React from 'react';
import { Zap, Users, Clock, TrendingUp, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    title: "Cost Reduction",
    value: "80%",
    icon: <Zap />,
    description: "Lower operational costs",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Response Time",
    value: "70%",
    subtitle: "Faster",
    icon: <Clock />,
    description: "Instant customer engagement",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Lead Qualification",
    value: "60%",
    subtitle: "More Efficient",
    icon: <TrendingUp />,
    description: "Improved conversion rates",
    color: "from-violet-500 to-violet-600"
  },
  {
    title: "Customer Satisfaction",
    value: "25%",
    subtitle: "Increase",
    icon: <HeartHandshake />,
    description: "Higher satisfaction scores",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Scalability",
    value: "∞",
    icon: <Users />,
    description: "Unlimited concurrent calls",
    color: "from-fuchsia-500 to-fuchsia-600",
    textColor: "text-fuchsia-600" // Added specific text color for infinity symbol
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
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ImpactSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.04)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transforming Business Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI-powered platform delivers measurable results across all key performance indicators
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                   style={{ background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }} />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 transition-transform duration-500 group-hover:-translate-y-1">
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  {stat.title}
                </h3>
                <div className="flex items-baseline mb-3">
                  <span className={`text-4xl font-bold ${stat.textColor || `bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}`}>
                    {stat.value}
                  </span>
                  {stat.subtitle && (
                    <span className="ml-1 text-slate-600">{stat.subtitle}</span>
                  )}
                </div>
                <p className="text-slate-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}