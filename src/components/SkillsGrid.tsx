'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  Server, 
  Shield, 
  Zap, 
  Cloud,
  GitBranch,
  Brain,
  Code2,
} from 'lucide-react';

export default function SkillsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const,
    },
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "🟨" },
        { name: "C / C++", icon: "⚙️" },
        { name: "HTML", icon: "🌐" },
      ]
    },
    {
      title: "Backend Frameworks",
      icon: Server,
      color: "neon-green",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Django", icon: "🐍" },
        { name: "Django REST Framework", icon: "🔌" },
        { name: "Django Channels", icon: "📡" },
        { name: "Swagger / OpenAPI", icon: "📄" },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "AWS S3", icon: "🪣" },
      ]
    },
    {
      title: "Real-time & Async",
      icon: Zap,
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
      skills: [
        { name: "WebSockets", icon: "🔌" },
        { name: "Celery", icon: "⚡" },
        { name: "SSE (Server-Sent Events)", icon: "📨" },
        { name: "RabbitMQ", icon: "🐇" },
      ]
    },
    {
      title: "AI & Integrations",
      icon: Brain,
      color: "neon-blue",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "VAPI AI", icon: "🤖" },
        { name: "OpenAI API", icon: "🧠" },
        { name: "Webhook Pipelines", icon: "🔗" },
        { name: "REST API Integration", icon: "🔌" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "neon-green",
      bgGradient: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions (CI/CD)", icon: "⚙️" },
        { name: "DigitalOcean / VPS", icon: "🖥️" },
        { name: "Railway / Render / AWS", icon: "☁️" },
      ]
    },
    {
      title: "Security",
      icon: Shield,
      color: "neon-purple",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "AES / RSA Encryption", icon: "🔒" },
        { name: "Role-Based Access Control", icon: "🛡️" },
        { name: "JWT Authentication", icon: "🎫" },
        { name: "Session Auth", icon: "🔐" },
      ]
    },
    {
      title: "Web Server & Tools",
      icon: GitBranch,
      color: "neon-pink",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/30",
      skills: [
        { name: "Nginx / Gunicorn", icon: "🌐" },
        { name: "Postman", icon: "📮" },
        { name: "Git / GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
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
            Technical{' '}
            <span className="text-white">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-green rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mastering the art of backend development with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                animate={floatAnimation}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`p-6 rounded-xl bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} backdrop-blur-sm hover:border-opacity-70 transition-all duration-300 cursor-glow h-full`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 text-${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.05 + skillIndex * 0.05,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-colors">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">Django</div>
              <div className="text-sm text-gray-400">Primary Framework</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green mb-2">API-First</div>
              <div className="text-sm text-gray-400">Development Approach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple mb-2">Real-time</div>
              <div className="text-sm text-gray-400">System Specialist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">AI-Ready</div>
              <div className="text-sm text-gray-400">Integration Expert</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
