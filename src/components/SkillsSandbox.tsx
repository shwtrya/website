import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette, Type, Zap } from 'lucide-react';

const SkillsSandbox: React.FC = () => {
  const [componentTheme, setComponentTheme] = useState<'light' | 'dark'>('light');
  const [componentSize, setComponentSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [componentState, setComponentState] = useState<'default' | 'hover' | 'disabled'>('default');

  const getSizeClasses = () => {
    switch (componentSize) {
      case 'small':
        return 'px-3 py-1.5 text-sm';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getThemeClasses = () => {
    if (componentTheme === 'dark') {
      return 'bg-gray-800 text-white border-gray-700';
    }
    return 'bg-white text-gray-900 border-gray-200';
  };

  const getStateClasses = () => {
    switch (componentState) {
      case 'hover':
        return 'scale-105 shadow-lg';
      case 'disabled':
        return 'opacity-50 cursor-not-allowed';
      default:
        return 'hover:shadow-md';
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills Sandbox
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Lihat keahlian UI/UX saya secara langsung. Eksperimen dengan kontrol di bawah untuk melihat component dalam berbagai state
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Component Preview
              </h3>

              <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8">
                <motion.button
                  animate={componentState === 'hover' ? { scale: 1.05 } : { scale: 1 }}
                  className={`
                    ${getSizeClasses()}
                    ${getThemeClasses()}
                    ${getStateClasses()}
                    font-semibold rounded-lg border-2 transition-all duration-300
                  `}
                  disabled={componentState === 'disabled'}
                >
                  Interactive Button
                </motion.button>
              </div>

              <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-mono">
                  Current State:
                </p>
                <div className="space-y-1 text-xs font-mono text-gray-700 dark:text-gray-300">
                  <div>Theme: <span className="text-blue-600 dark:text-blue-400">{componentTheme}</span></div>
                  <div>Size: <span className="text-blue-600 dark:text-blue-400">{componentSize}</span></div>
                  <div>State: <span className="text-blue-600 dark:text-blue-400">{componentState}</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Sun className="w-4 h-4 mr-2" />
                  Theme
                </h4>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setComponentTheme('light')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                      componentTheme === 'light'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Sun className="w-4 h-4 mx-auto" />
                  </button>
                  <button
                    onClick={() => setComponentTheme('dark')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                      componentTheme === 'dark'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Moon className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Type className="w-4 h-4 mr-2" />
                  Size
                </h4>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setComponentSize('small')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                      componentSize === 'small'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Small
                  </button>
                  <button
                    onClick={() => setComponentSize('medium')}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                      componentSize === 'medium'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => setComponentSize('large')}
                    className={`flex-1 py-2 px-4 rounded-lg text-lg transition-all duration-300 ${
                      componentSize === 'large'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Large
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  State
                </h4>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setComponentState('default')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                      componentState === 'default'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Default
                  </button>
                  <button
                    onClick={() => setComponentState('hover')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                      componentState === 'hover'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Hover
                  </button>
                  <button
                    onClick={() => setComponentState('disabled')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                      componentState === 'disabled'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Disabled
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 What This Demonstrates
            </h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
              <li>✓ Dynamic styling dengan Tailwind CSS</li>
              <li>✓ State management dengan React Hooks</li>
              <li>✓ Responsive design principles</li>
              <li>✓ Dark mode implementation</li>
              <li>✓ Smooth animations dengan Framer Motion</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSandbox;
