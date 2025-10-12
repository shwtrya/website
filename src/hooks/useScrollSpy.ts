import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Hentikan observer sebelumnya jika ada
    if (observer.current) {
      observer.current.disconnect();
    }

    // Buat IntersectionObserver baru
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 150}px 0px`, // Hanya aktifkan section di area tertentu
        threshold: 0,
      }
    );

    const { current: currentObserver } = observer;

    // Amati setiap section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup saat komponen unmount
    return () => currentObserver.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
};
