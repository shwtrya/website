import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, User, Briefcase, FolderOpen, GraduationCap, MessageCircle, FileText } from 'lucide-react';
import { useGreeting } from '../hooks/useGreeting';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const greeting = useGreeting();
  const [isResumeModalOpen, setIsResumeModalOpen] = React.useState(false);
  const [personalizedGreeting, setPersonalizedGreeting] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get('from');

    if (from) {
      const companyGreetings: { [key: string]: string } = {
        'google': 'Halo tim Google! Senang Anda berkunjung. Berikut adalah bagaimana saya dapat berkontribusi untuk Google.',
        'microsoft': 'Halo tim Microsoft! Terima kasih telah mengunjungi portofolio saya. Mari kita explore bagaimana saya bisa berkontribusi.',
        'meta': 'Halo tim Meta! Excited to share my work with you. Let\'s see how I can add value to Meta.',
        'tokopedia': 'Halo tim Tokopedia! Senang bertemu Anda. Saya antusias untuk berkontribusi di ekosistem e-commerce Indonesia.',
        'gojek': 'Halo tim Gojek! Terima kasih sudah berkunjung. Saya passionate untuk membangun solusi yang impact millions.',
        'shopee': 'Halo tim Shopee! Excited to showcase my skills for Southeast Asia\'s leading e-commerce platform.',
        'bukalapak': 'Halo tim Bukalapak! Senang Anda berkunjung. Let\'s build something amazing together.',
        'traveloka': 'Halo tim Traveloka! Terima kasih telah melihat portofolio saya. Ready to help revolutionize travel tech.',
      };

      const customGreeting = companyGreetings[from.toLowerCase()];
      if (customGreeting) {
        setPersonalizedGreeting(customGreeting);
      } else {
        setPersonalizedGreeting(`Halo tim ${from}! Senang Anda berkunjung. Berikut adalah bagaimana saya dapat berkontribusi.`);
      }
    }
  }, [location]);

  const navigationFlow = [
    { path: '/about', label: 'About Me', icon: User, description: 'Learn about me' },
    { path: '/experience', label: 'Experience', icon: Briefcase, description: 'My career journey' },
    { path: '/projects', label: 'Projects', icon: FolderOpen, description: 'View my work' },
    { path: '/education', label: 'Education', icon: GraduationCap, description: 'Academic background' },
    { path: '/contact', label: 'Contant', icon: MessageCircle, description: 'Contact me' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden pt-20 transition-colors duration-300">
      <h1 className="sr-only">Shawava Tritya - Portfolio Pelajar SMK Teknik Komputer dan Jaringan</h1>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200/30 dark:bg-emerald-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shawava Tritya</span>
            </h2>
          </motion.div>

          {personalizedGreeting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 px-4"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl font-semibold text-center">
                  {personalizedGreeting}
                </p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed px-4">
              {greeting}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Saya adalah <span className="font-semibold text-gray-800 dark:text-gray-200">Pelajar SMK – Teknik Komputer dan Jaringan</span> yang passionate sebagai Project Developer & Data Enthusiast.
            </p>
          </motion.div>

          {/* Navigation Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 px-4">Jelajahi perjalanan saya:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
              {navigationFlow.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="group block p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 h-full transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-label={`Navigate to ${item.label}: ${item.description}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <item.icon size={20} className="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" role="heading" aria-level="3">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                        {item.description}
                      </p>
                      <ArrowRight size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 sm:w-4 sm:h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8 sm:mb-12 px-4 max-w-2xl mx-auto"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center min-w-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              View My Work
            </Link>
            
            <motion.button
              onClick={() => setIsResumeModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg text-center min-w-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </motion.button>
            
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 text-center min-w-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center items-center space-x-4 sm:space-x-6 px-4"
          >
            <motion.a
              href="https://github.com/CyXd404"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex items-center justify-center"
              aria-label="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shawava-tritya"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex items-center justify-center"
              aria-label="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:shawavatritya@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-lg text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex items-center justify-center"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Resume Modal */}
        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Hero;
