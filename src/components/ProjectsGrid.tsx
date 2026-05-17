'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Shield, Zap, Brain, Package, Music, BookOpen, MessageSquare, Truck, ShoppingBag } from 'lucide-react';

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
      title: "OrbitalFitness",
      subtitle: "Multi-Role Fitness Platform",
      description: "Django-powered fitness platform (SoundsByWade) with 10+ core modules, real-time communication, and payment integration. Supports 1,000+ concurrent user actions and 5,000+ scheduled tasks daily, with ~35% latency reduction via DB query optimization.",
      icon: Zap,
      technologies: ["Django", "DRF", "Celery", "WebSockets", "PostgreSQL", "Redis"],
      category: "Health & Fitness",
      status: "Live",
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      github: null,
      demo: "#",
      demoLabel: "Live Site",
    },
    {
      title: "EduTutor",
      subtitle: "AI-Powered Learning Platform",
      description: "Multi-role learning platform (Admin/Teacher/Student) with an AI-powered assistant. Delivered 20+ REST APIs covering authentication, role-based access control, and end-to-end learning workflows.",
      icon: BookOpen,
      technologies: ["Django", "DRF", "OpenAI API", "JWT", "PostgreSQL", "RBAC"],
      category: "EdTech",
      status: "Live",
      color: "neon-green",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      github: null,
      demo: "#",
      demoLabel: "Live Site",
    },
    {
      title: "QuranApp",
      subtitle: "Region-Based Quran Platform",
      description: "Serves 100+ regional configurations with automated prayer time scheduling, Qibla distance calculation, and fasting tracker handling 5,000+ daily time-based updates accurately.",
      icon: Globe,
      technologies: ["Django", "Celery", "PostgreSQL", "REST API", "Geo Services"],
      category: "Religious Tech",
      status: "Live",
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      github: null,
      demo: "#",
      demoLabel: "Live Site",
    },
    {
      title: "Real-Time Collab System",
      subtitle: "Slack-Like Communication Platform",
      description: "Engineered a multi-channel communication system supporting real-time chat, video calling, and screen sharing across 100+ concurrent channel interactions with sub-200ms message delivery.",
      icon: MessageSquare,
      technologies: ["Django Channels", "WebSockets", "Redis", "WebRTC", "PostgreSQL"],
      category: "Collaboration",
      status: "Production",
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
      github: null,
      demo: null,
      demoLabel: null,
    },
    {
      title: "Hilliye",
      subtitle: "Multi-Vendor eCommerce Platform",
      description: "Architecting a multi-vendor eCommerce platform with 30+ endpoints, vendor onboarding, commission management, and role-based dashboards. Optimised DB relations cut query time by ~25%.",
      icon: ShoppingBag,
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "RBAC", "Docker"],
      category: "eCommerce",
      status: "In Progress",
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
      github: null,
      demo: "#",
      demoLabel: "Live Site",
    },
    {
      title: "Roarse",
      subtitle: "Shipping Carrier System",
      description: "Integrated real-time shipper-carrier live chat inside a Shipping Carrier System, reducing coordination delay by ~40% through persistent WebSocket connections.",
      icon: Truck,
      technologies: ["Django", "WebSockets", "DRF", "PostgreSQL", "Redis"],
      category: "Logistics",
      status: "Live",
      color: "neon-green",
      bgGradient: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
      github: null,
      demo: "#",
      demoLabel: "Live Site",
    },
    {
      title: "HCRM",
      subtitle: "Hospital CRM System",
      description: "Real-time AI-integrated hospital CRM using SSE and VAPI AI for smart appointment booking and prescription generation. Deployed on VPS with a 30% backend latency improvement.",
      icon: Brain,
      technologies: ["Django", "VAPI AI", "SSE", "Webhooks", "PostgreSQL", "Docker"],
      category: "Healthcare",
      status: "Production",
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      github: null,
      demo: null,
      demoLabel: null,
    },
    {
      title: "Live Crypto Tracker",
      subtitle: "Real-time Cryptocurrency Monitor",
      description: "Real-time crypto monitoring system using Django, Celery, and Channels for live price updates pushed via WebSocket with sub-second refresh intervals.",
      icon: Zap,
      technologies: ["Django", "Celery", "Channels", "WebSocket", "Redis", "PostgreSQL"],
      category: "FinTech",
      status: "Live",
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/30",
      github: "https://github.com/AbrarZaved",
      demo: null,
      demoLabel: null,
    },
    {
      title: "Resume Ranking AI",
      subtitle: "ML-Powered Resume Analyzer",
      description: "AI-powered resume screening system using ML models to rank candidates against job descriptions. Features PDF/DOCX parsing, skill matching, and REST API support for HR system integration.",
      icon: Brain,
      technologies: ["Django", "Python", "NLP", "ML Models", "DRF", "PostgreSQL"],
      category: "AI/ML",
      status: "Production",
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      github: "https://github.com/AbrarZaved",
      demo: null,
      demoLabel: null,
    },
    {
      title: "NovaShare",
      subtitle: "Encrypted File Sharing",
      description: "Enterprise-grade file-sharing platform with AES/RSA encryption, RBAC, unique sharing links, expiration controls, download limits, and REST API support for third-party integration. Zero reported breaches.",
      icon: Shield,
      technologies: ["Django DRF", "AES/RSA", "PostgreSQL", "AWS S3", "RBAC", "Redis"],
      category: "Security",
      status: "Production",
      color: "neon-green",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      github: "https://github.com/AbrarZaved",
      demo: null,
      demoLabel: null,
    },
    {
      title: "TasteCart",
      subtitle: "Food Delivery Platform",
      description: "Full-featured food delivery app with real-time order tracking, AJAX cart, and multi-role dashboards (Admin/Restaurant/Rider/Customer). Led as Project Lead and Backend Developer.",
      icon: Package,
      technologies: ["Django", "PostgreSQL", "Channels", "Google Maps API", "Celery", "Redis"],
      category: "Logistics",
      status: "Production",
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      github: "https://github.com/AbrarZaved",
      demo: null,
      demoLabel: null,
    },
    {
      title: "Bahon",
      subtitle: "University Transportation System",
      description: "Multi-role bus scheduling platform (Super Admin/Supervisor/Student) with student auto-login via student ID, daily route assignment, activity tracking, and admin reports. 186 commits; CI/CD via GitHub Actions.",
      icon: Database,
      technologies: ["Django", "PostgreSQL", "GitHub Actions", "CI/CD", "Docker", "Render"],
      category: "Transportation",
      status: "Production",
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
      github: "https://github.com/AbrarZaved",
      demo: null,
      demoLabel: null,
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
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            12 production-ready systems spanning healthcare, AI/ML, eCommerce, real-time comms, and logistics — out of a portfolio of 30+.
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
              <div className={`h-full p-6 rounded-xl bg-gradient-to-br ${project.bgGradient} border ${project.borderColor} backdrop-blur-sm hover:border-opacity-70 transition-all duration-300 flex flex-col`}>
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
                <div className="mb-4 flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <h4 className={`text-sm font-medium text-${project.color} mb-3`}>
                    {project.subtitle}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
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
                <div className="flex items-center gap-3 mt-auto">
                  {project.github && (
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
                  )}
                  {project.demo && project.demoLabel && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1 px-3 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.demoLabel}
                    </motion.a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-xs text-gray-500 italic">Private / Client Work</span>
                  )}
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
            These are 12 highlights from a portfolio of 30+ production systems
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
