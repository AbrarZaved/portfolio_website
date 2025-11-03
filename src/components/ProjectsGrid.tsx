'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Shield, Zap, Brain } from 'lucide-react';

export default function ProjectsGrid() {
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

  const cardVariants = {
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

  const projects = [
    {
      title: "HCRM",
      subtitle: "Hospital CRM System",
      description: "Real-time AI-integrated dashboard using SSE and VAPI for smart appointment scheduling and patient management.",
      icon: Brain,
      technologies: ["Django", "VAPI AI", "SSE", "PostgreSQL", "Docker"],
      category: "Healthcare",
      status: "Production",
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "Live Crypto Tracker",
      subtitle: "Real-time Cryptocurrency Monitor",
      description: "Real-time crypto monitoring system using Django, Celery, and Channels for live price updates and alerts.",
      icon: Zap,
      technologies: ["Django", "Celery", "Channels", "WebSocket", "Redis"],
      category: "FinTech",
      status: "Live",
      color: "neon-green",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "Resume Ranking AI",
      subtitle: "ML-Powered Resume Analyzer",
      description: "ML-powered resume analyzer that ranks resumes based on job description relevance using NLP algorithms.",
      icon: Brain,
      technologies: ["Django", "Python", "NLP", "TensorFlow", "PostgreSQL"],
      category: "AI/ML",
      status: "Production",
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "NovaShare",
      subtitle: "Encrypted File Sharing",
      description: "AES-encrypted file-sharing platform with advanced access control, expiring links, and secure document management.",
      icon: Shield,
      technologies: ["Django", "AES Encryption", "AWS S3", "Celery", "Redis"],
      category: "Security",
      status: "Production",
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "Golpo Ghor",
      subtitle: "Dynamic eCommerce Platform",
      description: "Dynamic eCommerce platform with flexible pricing, modular product architecture, and integrated payment systems.",
      icon: Globe,
      technologies: ["Django", "PostgreSQL", "Stripe", "Redis", "Docker"],
      category: "eCommerce",
      status: "Production",
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "TasteCart",
      subtitle: "Food Delivery Platform",
      description: "Comprehensive food delivery platform with restaurant dashboards, live order tracking, and rider management system.",
      icon: Database,
      technologies: ["Django", "PostgreSQL", "Channels", "Google Maps API", "Celery"],
      category: "Logistics",
      status: "Production",
      color: "neon-green",
      bgGradient: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "Bahon",
      subtitle: "DIU Transportation System",
      description: "Unified transport management with student auto-login, supervisor analytics, and real-time vehicle tracking.",
      icon: Zap,
      technologies: ["Django", "PostgreSQL", "Google Maps", "WebSocket", "Docker"],
      category: "Transportation",
      status: "Production",
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
    {
      title: "Live Stock Tracker",
      subtitle: "Real-time Market Monitor",
      description: "Celery + Django Channels system for real-time stock and commodity updates with advanced analytics and alerts.",
      icon: Database,
      technologies: ["Django", "Celery", "Channels", "Redis", "PostgreSQL"],
      category: "FinTech",
      status: "Production",
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/30",
      github: "https://github.com/AbrarZaved",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent text-white">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing 30+ production-ready systems spanning healthcare, AI, eCommerce, and real-time applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="group cursor-glow"
            >
              <div className={`h-full p-6 rounded-xl bg-gradient-to-br ${project.bgGradient} border ${project.borderColor} backdrop-blur-sm hover:border-opacity-70 transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/20 text-${project.color}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <h4 className={`text-sm font-medium text-${project.color} mb-3`}>
                    {project.subtitle}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-gray-800/30 text-gray-400 rounded border border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-800/30 text-gray-400 rounded border border-gray-700/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center gap-1 px-3 py-2 bg-${project.color}/20 text-${project.color} rounded-lg text-sm font-medium hover:bg-${project.color}/30 transition-colors duration-200`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-1 px-3 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            These are just a few highlights from my 30+ project portfolio
          </p>
          <motion.a
            href="https://github.com/AbrarZaved"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg font-semibold text-white hover:from-neon-blue hover:to-neon-purple transition-all duration-300 cursor-glow"
          >
            View All Projects on GitHub
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}