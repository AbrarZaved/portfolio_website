'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const contactCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      color: "text-neon-blue",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Mail,
      label: "Email",
      value: "abrarzaved2002@gmail.com",
      color: "text-neon-green",
      bgColor: "bg-green-500/10",
      link: "mailto:abrarzaved2002@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@AbrarZaved",
      color: "text-neon-purple",
      bgColor: "bg-purple-500/10",
      link: "https://github.com/AbrarZaved",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abrar Javed Sorafi",
      color: "text-neon-pink",
      bgColor: "bg-pink-500/10",
      link: "https://linkedin.com/in/abrar-javed-sorafi-a7082b26b/",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold font-sora"
              >
                About{' '}
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
              />
            </div>

            <motion.div variants={itemVariants} className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I&apos;m a <span className="text-neon-blue font-semibold">motivated Django developer</span> with 
                extensive experience building <span className="text-neon-green font-semibold">30+ production-ready systems</span>. 
                My expertise spans across REST APIs, scalable backend architectures, and cloud deployment strategies.
              </p>
              
              <p className="text-lg">
                Passionate about <span className="text-neon-purple font-semibold">backend development</span>, 
                security implementations, and performance optimization. I thrive on creating 
                <span className="text-neon-pink font-semibold"> intelligent, secure, and scalable systems</span> that 
                solve real-world problems.
              </p>
              
              <p className="text-lg">
                Currently leading backend development at <span className="text-neon-blue font-semibold">SevvenLabs</span>, 
                where I architect cutting-edge solutions and mentor development teams to deliver exceptional results.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30">
                <span className="text-sm font-medium">🚀 30+ Projects Delivered</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-full border border-neon-green/30">
                <span className="text-sm font-medium">⚡ Performance Focused</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full border border-neon-purple/30">
                <span className="text-sm font-medium">🔒 Security Expert</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold font-sora mb-8 text-center lg:text-left"
            >
              Get In{' '}
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h3>

            <div className="grid gap-4">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="cursor-glow"
                >
                  {card.link ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-6 rounded-xl border border-gray-700/50 ${card.bgColor} backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${card.bgColor} ${card.color}`}>
                          <card.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">{card.label}</p>
                          <p className={`text-lg font-semibold ${card.color}`}>
                            {card.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className={`p-6 rounded-xl border border-gray-700/50 ${card.bgColor} backdrop-blur-sm`}>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${card.bgColor} ${card.color}`}>
                          <card.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">{card.label}</p>
                          <p className={`text-lg font-semibold ${card.color}`}>
                            {card.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-neon-blue mb-2">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-green mb-2">30+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}