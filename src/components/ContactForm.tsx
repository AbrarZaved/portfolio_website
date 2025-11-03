'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle, Rocket, Zap, Settings, TrendingUp } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:abrarzaved2002@gmail.com',
      label: 'abrarzaved2002@gmail.com',
      color: 'neon-blue',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/AbrarZaved',
      label: '@AbrarZaved',
      color: 'neon-purple',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/abrar-javed-sorafi-a7082b26b/',
      label: 'Abrar Javed Sorafi',
      color: 'neon-green',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Header and Contact Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold font-sora"
              >
                Let&apos;s Build Something{' '}
                <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
                  Exceptional
                </span>
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full"
              />

              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed max-w-md"
              >
                Ready to transform your ideas into powerful, scalable backend solutions? 
                Let&apos;s discuss your project and create something amazing together.
              </motion.p>
            </div>

            {/* Contact Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect with me
              </h3>
              <div className="space-y-3">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-${link.color}/50 backdrop-blur-sm transition-all duration-300 cursor-glow group`}
                  >
                    <div className={`p-2 rounded-lg bg-${link.color}/20 text-${link.color} group-hover:bg-${link.color}/30 transition-colors duration-200`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{link.name}</p>
                      <p className={`font-medium text-${link.color}`}>{link.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg font-semibold text-white hover:from-neon-blue hover:to-neon-purple transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Full Width Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
          >
            <h4 className="font-semibold text-white mb-8 text-2xl text-center">Available Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:border-neon-pink/50 transition-all duration-200 group">
                <div className="p-3 rounded-lg bg-neon-pink/20 text-neon-pink group-hover:bg-neon-pink/30 transition-colors duration-200">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-base mb-1">Backend Development</h5>
                  <p className="text-sm text-gray-400">Scalable server-side solutions with modern frameworks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-200 group">
                <div className="p-3 rounded-lg bg-neon-blue/20 text-neon-blue group-hover:bg-neon-blue/30 transition-colors duration-200">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-base mb-1">API Design & Optimization</h5>
                  <p className="text-sm text-gray-400">RESTful and GraphQL APIs with performance optimization</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:border-neon-purple/50 transition-all duration-200 group">
                <div className="p-3 rounded-lg bg-neon-purple/20 text-neon-purple group-hover:bg-neon-purple/30 transition-colors duration-200">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-base mb-1">System Architecture</h5>
                  <p className="text-sm text-gray-400">Consulting and design solutions for scalable systems</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-600/30 hover:border-neon-green/50 transition-all duration-200 group">
                <div className="p-3 rounded-lg bg-neon-green/20 text-neon-green group-hover:bg-neon-green/30 transition-colors duration-200">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-base mb-1">Performance Optimization</h5>
                  <p className="text-sm text-gray-400">Database and application tuning for maximum efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}