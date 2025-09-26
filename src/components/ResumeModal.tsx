import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Eye } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Shawava_Tritya_CV.pdf';
    link.download = 'Shawava_Tritya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.4 
          }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-lg flex items-center justify-center">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Resume / CV
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Shawava Tritya - SMK Student
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Download CV PDF"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* PDF Embed for desktop, fallback content for mobile */}
            <div className="w-full">
              {/* Desktop PDF Viewer */}
              <div className="hidden md:block">
                <div className="w-full h-[600px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <iframe
                    src="/Shawava_Tritya_CV.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    className="w-full h-full"
                    title="Shawava Tritya CV Preview"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Mobile/Tablet Fallback - Structured CV Content */}
              <div className="md:hidden space-y-6">
                <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Shawava Tritya
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                    SMK Student - Teknik Komputer dan Jaringan
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>📧 shawavatritya@gmail.com</p>
                    <p>📱 085187805786</p>
                    <p>📍 Cileungsi, Kab. Bogor, Jawa Barat</p>
                    <p>💼 linkedin.com/in/shawava-tritya</p>
                    <p>🔗 github.com/CyXd404</p>
                  </div>
                </div>

                {/* Professional Profile */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></div>
                    PROFIL PROFESIONAL
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Pelajar SMK Negeri 1 Cileungsi jurusan Teknik Komputer dan Jaringan (2023-2026). 
                    Memiliki minat besar di bidang teknologi, khususnya penggunaan mikrokontroler dan pengolahan data.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></div>
                    KEAHLIAN TEKNIS
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Hard Skills:</span> Data Entry, Produksi, Arduino & IoT, Instalasi Jaringan
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Soft Skills:</span> Teliti, Disiplin, Komunikasi, Kerja Tim
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Software:</span> Microsoft Office (Word, Excel, PowerPoint)
                    </p>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></div>
                    PENGALAMAN KERJA
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Operator Produksi Tas - PT Serin Indonesia
                      </h5>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Juni-September 2025</p>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Memasang aksesoris silinder pada zipper tas</li>
                        <li>• Mengaplikasikan lem pada bahan tas sebelum dijahit</li>
                        <li>• Membantu proses produksi sesuai standar kerja</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Data Entry - PT Wova Group Indonesia
                      </h5>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2023-2025</p>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Menginput dan memvalidasi data pelanggan</li>
                        <li>• Menyusun laporan data secara rapi dan akurat</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></div>
                    PROYEK
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">Smart Home Berbasis Arduino Uno</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Sistem monitoring lampu dan suhu ruangan dari jarak jauh
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">Instalasi ISP hingga Router</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Pengaturan perangkat dan jaringan ISP secara teknis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded mr-3"></div>
                    PENDIDIKAN
                  </h4>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">SMK Negeri 1 Cileungsi</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Teknik Komputer dan Jaringan (2023-2026) - Pelajar Aktif
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Mobile */}
              <div className="md:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <Download size={18} />
                    <span>Download PDF</span>
                  </motion.button>
                  
                  <motion.a
                    href="/Shawava_Tritya_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <Eye size={18} />
                    <span>View in New Tab</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;