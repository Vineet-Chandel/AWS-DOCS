import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Subtle floating button for smoothly returning to the top of the document.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Clean hash
    window.history.pushState(null, '', ' ');
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 shadow-md hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:-translate-y-0.5 focus:outline-none"
      aria-label="Scroll back to top of document"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
