import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import CaseStudy from './CaseStudy';
import ProjectHotspot from './ProjectHotspot';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const openCaseStudy = (project: any) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  const projects = [
    {
      title: 'Smart Home Berbasis Arduino Uno',
      description: 'Proyek merakit sistem yang dapat memonitor lampu dan suhu ruangan, serta mengontrol perangkat elektronik dari jarak jauh menggunakan mikrokontroler Arduino.',
      image: 'https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      tags: ['Arduino', 'IoT', 'Sensors', 'Remote Control'],
      liveLink: 'https://github.com/CyXd404',
      githubLink: 'https://github.com/CyXd404',
      hotspots: [
        {
          id: 'hotspot1',
          x: 30,
          y: 40,
          title: 'Sensor DHT22',
          description: 'Sensor suhu dan kelembaban dengan akurasi tinggi. Challenge: Mengatasi noise reading dengan averaging dan debouncing.',
          category: 'tech' as const
        },
        {
          id: 'hotspot2',
          x: 60,
          y: 35,
          title: 'ESP8266 Module',
          description: 'WiFi connectivity untuk kontrol remote. Response time optimized hingga < 2 detik dengan buffer management.',
          category: 'tech' as const
        },
        {
          id: 'hotspot3',
          x: 45,
          y: 70,
          title: 'Relay Control',
          description: 'UI dirancang intuitif dengan toggle switches untuk kontrol lampu yang mudah diakses bahkan di layar kecil.',
          category: 'design' as const
        },
        {
          id: 'hotspot4',
          x: 75,
          y: 60,
          title: 'Real-time Monitoring',
          description: 'Dashboard menampilkan data sensor secara real-time dengan auto-refresh setiap 2 detik tanpa reload halaman.',
          category: 'feature' as const
        }
      ],
      caseStudy: {
        title: 'Smart Home Berbasis Arduino Uno',
        description: 'Sistem IoT untuk monitoring dan kontrol perangkat rumah menggunakan Arduino Uno dengan konektivitas WiFi.',
        problem: 'Kesulitan dalam memonitor kondisi rumah saat tidak berada di tempat, terutama suhu ruangan dan status lampu.',
        solution: 'Membangun sistem IoT menggunakan Arduino Uno, sensor DHT22, relay module, dan ESP8266 untuk konektivitas WiFi.',
        results: 'Berhasil menciptakan sistem yang dapat memonitor suhu real-time dan mengontrol lampu dari smartphone dengan response time < 2 detik.',
        beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400',
        afterImage: 'https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400',
        technologies: ['Arduino Uno', 'ESP8266', 'DHT22', 'Relay Module', 'Blynk App', 'C++'],
        duration: '2 bulan',
        impact: {
          users: 5,
          efficiency: 40,
          satisfaction: 95
        },
        timeline: [
          { phase: 'Research & Planning', duration: '7', description: 'Riset komponen dan perencanaan sistem' },
          { phase: 'Hardware Assembly', duration: '14', description: 'Perakitan hardware dan testing komponen' },
          { phase: 'Programming', duration: '21', description: 'Coding Arduino dan integrasi dengan Blynk' },
          { phase: 'Testing & Optimization', duration: '14', description: 'Testing sistem dan optimasi performa' }
        ]
      }
    },
    {
      title: 'Instalasi ISP hingga Router',
      description: 'Membuat pengaturan perangkat dan jaringan ISP secara teknis, dari sisi instalasi sampai konfigurasi router, dikerjakan dalam waktu 3 bulan.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
      tags: ['Network', 'ISP', 'Router', 'Configuration'],
      liveLink: 'https://github.com/CyXd404',
      githubLink: 'https://github.com/CyXd404',
      hotspots: [
        {
          id: 'hotspot5',
          x: 25,
          y: 45,
          title: 'Cable Management',
          description: 'Implementasi structured cabling standard untuk kemudahan maintenance dan troubleshooting. Penggunaan color coding untuk identifikasi.',
          category: 'design' as const
        },
        {
          id: 'hotspot6',
          x: 55,
          y: 30,
          title: 'Router Configuration',
          description: 'Konfigurasi Mikrotik dengan VLAN segmentation untuk isolasi traffic dan QoS untuk prioritas bandwidth.',
          category: 'tech' as const
        },
        {
          id: 'hotspot7',
          x: 70,
          y: 55,
          title: 'Network Monitoring',
          description: 'System monitoring 24/7 dengan uptime 99.8%. Alert otomatis jika ada gangguan koneksi.',
          category: 'feature' as const
        }
      ],
      caseStudy: {
        title: 'Instalasi ISP hingga Router',
        description: 'Proyek instalasi dan konfigurasi jaringan ISP dari infrastruktur hingga end-user dengan fokus pada stabilitas dan performa.',
        problem: 'Kompleksitas instalasi jaringan ISP yang membutuhkan pemahaman mendalam tentang topologi jaringan dan konfigurasi perangkat.',
        solution: 'Melakukan instalasi sistematis mulai dari perencanaan topologi, instalasi kabel, konfigurasi router, hingga testing konektivitas.',
        results: 'Berhasil menginstal 50+ titik jaringan dengan uptime 99.8% dan kecepatan sesuai spesifikasi ISP.',
        beforeImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400',
        afterImage: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400',
        technologies: ['Router Configuration', 'Network Topology', 'Cable Management', 'Mikrotik', 'VLAN', 'QoS'],
        duration: '3 bulan',
        impact: {
          users: 50,
          efficiency: 60,
          satisfaction: 92
        },
        timeline: [
          { phase: 'Site Survey', duration: '14', description: 'Survey lokasi dan perencanaan topologi' },
          { phase: 'Infrastructure Setup', duration: '30', description: 'Instalasi kabel dan perangkat jaringan' },
          { phase: 'Configuration', duration: '21', description: 'Konfigurasi router dan switch' },
          { phase: 'Testing & Handover', duration: '7', description: 'Testing performa dan serah terima' }
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyek Unggulan</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Berikut adalah beberapa proyek terbaru saya yang menunjukkan kemampuan dan pengalaman
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="grid lg:grid-cols-2 gap-6 p-6">
                <div>
                  <ProjectHotspot
                    imageUrl={project.image}
                    imageAlt={`Screenshot proyek ${project.title}`}
                    hotspots={project.hotspots}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                      💡 Tip: Klik titik-titik pada gambar untuk melihat detail teknis dan keputusan desain
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={() => openCaseStudy(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <Eye size={18} />
                      <span>Case Study</span>
                    </motion.button>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Case Study Modal */}
        {selectedProject && (
          <CaseStudy
            isOpen={isCaseStudyOpen}
            onClose={() => setIsCaseStudyOpen(false)}
            project={selectedProject.caseStudy}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
