import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  category: 'tech' | 'design' | 'feature';
}

interface ProjectHotspotProps {
  imageUrl: string;
  imageAlt: string;
  hotspots: Hotspot[];
}

const ProjectHotspot: React.FC<ProjectHotspotProps> = ({ imageUrl, imageAlt, hotspots }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const getCategoryColor = (category: Hotspot['category']) => {
    switch (category) {
      case 'tech':
        return 'bg-blue-500 hover:bg-blue-600 border-blue-400';
      case 'design':
        return 'bg-purple-500 hover:bg-purple-600 border-purple-400';
      case 'feature':
        return 'bg-emerald-500 hover:bg-emerald-600 border-emerald-400';
    }
  };

  const getCategoryLabel = (category: Hotspot['category']) => {
    switch (category) {
      case 'tech':
        return 'Tantangan Teknis';
      case 'design':
        return 'Keputusan Desain (UX)';
      case 'feature':
        return 'Fitur Unggulan';
    }
  };

  return (
    <div className="relative w-full">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full rounded-xl shadow-lg"
        loading="lazy"
      />

      {hotspots.map((hotspot) => (
        <React.Fragment key={hotspot.id}>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            className={`absolute w-8 h-8 ${getCategoryColor(hotspot.category)} text-white rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300 z-10`}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
            aria-label={`View ${hotspot.title}`}
          >
            <Plus className={`w-4 h-4 transition-transform duration-300 ${activeHotspot === hotspot.id ? 'rotate-45' : ''}`} />
            <span className="absolute inset-0 rounded-full animate-ping opacity-30" />
          </motion.button>

          <AnimatePresence>
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 max-w-xs border border-gray-200 dark:border-gray-700"
                style={{
                  left: hotspot.x > 50 ? 'auto' : `${hotspot.x + 5}%`,
                  right: hotspot.x > 50 ? `${100 - hotspot.x + 5}%` : 'auto',
                  top: `${hotspot.y}%`,
                  transform: 'translateY(-50%)',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    hotspot.category === 'tech' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                    hotspot.category === 'design' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
                    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                  }`}>
                    {getCategoryLabel(hotspot.category)}
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  {hotspot.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {hotspot.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectHotspot;
