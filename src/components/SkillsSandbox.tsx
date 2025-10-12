import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette, Type, Zap } from 'lucide-react';

// Tipe untuk state agar lebih aman
type ComponentTheme = 'light' | 'dark';
type ComponentSize = 'small' | 'medium' | 'large';
type ComponentState = 'default' | 'hover' | 'disabled';

const SkillsSandbox: React.FC = () => {
  // State untuk setiap kontrol
  const [componentTheme, setComponentTheme] = useState<ComponentTheme>('light');
  const [componentSize, setComponentSize] = useState<ComponentSize>('medium');
  const [componentState, setComponentState] = useState<ComponentState>('default');

  // Gunakan useMemo untuk menghitung kelas CSS secara efisien.
  // Ini akan dipanggil kembali hanya jika salah satu dari state ketergantungan berubah.
  const buttonClasses = useMemo(() => {
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
    };

    const themeClasses = {
      light: 'bg-white text-gray-900 border-gray-200',
      dark: 'bg-gray-800 text-white border-gray-700',
    };

    const stateClasses = {
      default: 'hover:shadow-md',
      hover: 'scale-105 shadow-lg',
      disabled: 'opacity-50 cursor-not-allowed',
    };

    return [
      sizeClasses[componentSize],
      themeClasses[componentTheme],
      stateClasses[componentState],
      'font-semibold rounded-lg border-2 transition-all duration-300'
    ].join(' ');
  }, [componentSize, componentTheme, componentState]);

  // Data untuk rendering tombol kontrol (lebih modular)
  const controls = [
    {
      label: 'Theme',
      icon: Sun,
      options: ['light', 'dark'],
      state: componentTheme,
      setter: setComponentTheme,
    },
    {
      label: 'Size',
      icon: Type,
      options: ['small', 'medium', 'large'],
      state: componentSize,
      setter: setComponentSize,
    },
    {
      label: 'State',
      icon: Zap,
      options: ['default', 'hover', 'disabled'],
      state: componentState,
      setter: setComponentState,
    },
  ];

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
            Lihat keahlian UI/UX saya secara langsung. Eksperimen dengan kontrol di bawah untuk melihat komponen dalam berbagai state.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Component Preview */}
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
                  className={buttonClasses}
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

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {controls.map(({ label, icon: Icon, options, state, setter }) => (
                <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </h4>
                  <div className="flex space-x-3">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setter(option as any)}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 capitalize ${
                          state === option
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {label === 'Theme' && option === 'light' ? <Sun className="w-4 h-4 mx-auto" /> :
                         label === 'Theme' && option === 'dark' ? <Moon className="w-4 h-4 mx-auto" /> :
                         option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
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
              <li>✓ State management dengan React Hooks (useState & useMemo)</li>
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
