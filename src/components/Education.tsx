import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Cpu,
  Code2,
  Settings,
  Users,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  gradient: string;
  accent: string;
  skills: string[];
}

const EducationAndSkills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      name: "Technical Skills",
      icon: <Cpu size={36} />,
      gradient: "from-blue-600 via-cyan-400 to-blue-500",
      accent: "text-cyan-400",
      skills: ["Arduino", "IoT", "Mikrotik", "Data Entry"],
    },
    {
      name: "Web Development",
      icon: <Code2 size={36} />,
      gradient: "from-emerald-500 via-teal-400 to-lime-400",
      accent: "text-emerald-400",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      name: "Tools & Platforms",
      icon: <Settings size={36} />,
      gradient: "from-orange-500 via-amber-400 to-yellow-300",
      accent: "text-yellow-400",
      skills: ["Git", "GitHub", "VS Code", "Supabase", "Microsoft Office"],
    },
    {
      name: "Soft Skills",
      icon: <Users size={36} />,
      gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
      accent: "text-fuchsia-400",
      skills: [
        "Problem Solving",
        "Team Work",
        "Communication",
        "Time Management",
      ],
    },
  ];

  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative">
      {/* ===================== EDUCATION SECTION ===================== */}
      <section
        id="education"
        className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300 via-gray-100 to-transparent dark:from-blue-900 dark:via-gray-800"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
          >
            Pendidikan
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-lg flex items-center justify-center">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Teknik Komputer dan Jaringan
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    SMK Negeri 1 Cileungsi
                  </p>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} />
                  <span>Cileungsi, Bogor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={16} />
                  <span>2023 - 2026</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Mempelajari instalasi jaringan, konfigurasi perangkat, pemrograman
              mikrokontroler, dan sistem komputer. Fokus pada pengembangan
              kemampuan praktis di bidang teknologi informasi.
            </p>
          </motion.div>
        </div>

        {/* Smooth Transition Layer */}
        <motion.div
          style={{ y: translateY }}
          className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-gray-50 to-gray-900 dark:from-gray-900 dark:to-black"
        ></motion.div>
      </section>

      {/* ===================== TRANSITION EFFECT ===================== */}
      <div className="relative h-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-900/30 to-gray-950 dark:from-gray-900 dark:via-blue-800/40 dark:to-black"
        />
      </div>

      {/* ===================== SKILL SECTION ===================== */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[150px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 text-center uppercase tracking-widest mb-16"
          >
            Keahlian Inovatif
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group rounded-2xl p-6 backdrop-blur-lg bg-white/10 border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-500 overflow-hidden"
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute -top-1/2 left-0 w-full h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 animate-[shine_3s_linear_infinite]"></div>
                </div>

                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-5 mx-auto shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-xl font-bold ${item.accent} text-center mb-4 tracking-wide uppercase`}
                >
                  {item.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {item.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="px-3 py-1 rounded-full bg-white/10 text-gray-200 text-xs font-medium border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Education;