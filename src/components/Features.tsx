import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Code, Palette, LineChart } from 'lucide-react';

const features = [
  {
    title: "Secure IoT Cloud Gateway",
    description: "Creating intuitive and engaging user experiences that delight and inspire.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Front-End Development",
    description: "Building responsive, fast, and accessible web applications using modern technologies.",
    icon: <Code className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Web Applications",
    description: "Developing powerful web apps that solve real-world problems with elegant solutions.",
    icon: <Monitor className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Analytics & Optimization",
    description: "Measuring performance and continuously improving digital products based on data.",
    icon: <LineChart className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    color: "from-orange-400 to-orange-600"
  }
];

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A blend of design and technical skills to create exceptional digital experiences
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src={feature.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-5`}>
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};