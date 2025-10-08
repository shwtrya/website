import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            e.preventDefault();
            navigate('/');
            break;
          case 'a':
            e.preventDefault();
            navigate('/about');
            break;
          case 'e':
            e.preventDefault();
            navigate('/experience');
            break;
          case 'p':
            e.preventDefault();
            navigate('/projects');
            break;
          case 'd':
            e.preventDefault();
            navigate('/education');
            break;
          case 'c':
            e.preventDefault();
            navigate('/contact');
            break;
          case 't':
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          case 'b':
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};
