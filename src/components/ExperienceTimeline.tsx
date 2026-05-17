'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const experiences = [
    {
      title: "Jr. Backend Developer",
      company: "JVAI",
      period: "Dec 2025 – Present",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: [
        "Built QuranApp — a region-based Quran app serving 100+ regional configs with prayer time automation, Qibla calculation, and fasting tracker handling 5,000+ daily time-based updates",
        "Developed SoundsByWade (OrbitalFitness) — a multi-role fitness platform with 10+ core modules, real-time communication, payment integration, and ~35% latency reduction via query optimization",
        "Delivered EduTutor — a multi-role learning platform (Admin/Teacher/Student) with AI-powered assistant and 20+ REST APIs covering auth, RBAC, and learning workflows",
        "Engineered a Slack-like real-time collaboration system supporting chat, video calling, and screen sharing across 100+ concurrent channels with sub-200ms message delivery",
        "Integrated a real-time shipper-carrier live chat in Roarse (Shipping Carrier System), reducing coordination delay ~40% via persistent WebSocket connections",
        "Architecting Hilliye — a multi-vendor eCommerce platform with 30+ endpoints, vendor onboarding, commission management, and RBAC dashboards; optimised DB relations cut query time ~25%",
      ],
      technologies: ["Django", "DRF", "WebSockets", "Celery", "Redis", "PostgreSQL", "Docker", "VAPI AI"],
      links: [
        { label: "OrbitalFitness", url: "https://orbitalfitness.us/" },
        { label: "EduTutor", url: "https://portal.ohryot.org/" },
        { label: "Roarse", url: "https://roarse.com/" },
        { label: "Hilliye", url: "https://prod.hiiliye.com/" },
      ],
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Lead Django Developer",
      company: "SevvenLabs",
      period: "Aug 2025 – Dec 2025",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: [
        "Led a backend team of 3 developers; established code review standards and deployment pipelines that reduced release cycle time by 35%",
        "Built and deployed HCRM — a Hospital CRM integrated with VAPI AI assistant and webhook pipelines on VPS, cutting backend response latency by 30%",
        "Coordinated with cross-functional teams (frontend, QA, design) to deliver production-ready features on schedule across 3 concurrent project tracks",
        "Architected scalable microservices for healthcare management using Django, SSE, and PostgreSQL",
      ],
      technologies: ["Django", "VAPI AI", "Webhooks", "SSE", "PostgreSQL", "Docker", "VPS"],
      links: [],
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Freelance Django Developer",
      company: "Independent",
      period: "Jan 2024 – Aug 2025",
      location: "Remote",
      type: "Freelance",
      description: [
        "Delivered 30+ production-ready Django systems for clients across eCommerce, file-sharing, university transport, and AI-powered HR tooling — achieving 100% on-time delivery rate",
        "Implemented REST APIs, MySQL/PostgreSQL databases, session-based authentication, and Celery task queues; systems collectively handled 10,000+ monthly active users",
        "Built NovaShare — an enterprise-grade file-sharing platform with AES/RSA encryption, RBAC, expiring links, and download limits",
        "Developed TasteCart — a full-featured food delivery app with real-time order tracking, AJAX cart, and multi-role dashboards as Project Lead and Backend Developer",
      ],
      technologies: ["Django", "Python", "REST API", "Celery", "Redis", "MySQL", "PostgreSQL", "AES/RSA"],
      links: [],
      color: "neon-green",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4">
            My{' '}
            <span className="text-white">
              Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From freelance projects to leading development teams — my professional evolution in backend engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start gap-8`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-gray-900 shadow-lg z-10 mt-6`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${exp.bgGradient} border ${exp.borderColor} backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 cursor-glow`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${exp.color}/20 text-${exp.color} border border-${exp.color}/30 shrink-0 ml-2`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className={`text-lg font-semibold text-${exp.color} mb-2`}>
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2 text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Live Links */}
                    {exp.links.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-${exp.color}/20 text-${exp.color} border border-${exp.color}/30 hover:bg-${exp.color}/30 transition-colors`}
                          >
                            <ExternalLink className="w-3 h-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my detailed portfolio showcasing the projects I&apos;ve built and the impact they&apos;ve made.
            </p>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:from-neon-purple hover:to-neon-pink transition-all duration-300 cursor-glow"
            >
              View My Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
