import React, { useState, useEffect } from 'react';

/**
 * Sticky right-sidebar "On this page" table of contents following Reference Image 2.
 * Dynamically queries headings or takes provided headings, highlights active heading on scroll.
 */
export function RightTableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // Offset for header
      const elements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean);

      if (elements.length === 0) return;

      let current = elements[0].id;

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.offsetTop <= scrollPos) {
          current = el.id;
        } else {
          break;
        }
      }

      // If at bottom of page, activate last item
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        current = elements[elements.length - 1].id;
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPos = target.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (!headings || headings.length === 0) return null;

  return (
    <aside
      aria-label="Table of contents for this page"
      className="hidden xl:block w-56 shrink-0 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pl-4 py-2 text-xs custom-scrollbar"
    >
      <div className="font-semibold text-slate-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] mb-3 select-none">
        On this page
      </div>

      <div className="relative border-l border-slate-200 dark:border-zinc-800">
        <nav className="space-y-1">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            const isH3 = item.level === 3;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group relative flex items-center py-1 transition-all leading-snug ${
                  isH3 ? 'pl-5 text-[11px]' : 'pl-3'
                } ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-blue-400'
                    : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {/* Active Indicator Bar on the left border */}
                {isActive && (
                  <span
                    className="absolute -left-[1.5px] top-1 bottom-1 w-[2px] bg-blue-600 dark:bg-blue-400 rounded-full"
                    aria-hidden="true"
                  />
                )}
                <span className="truncate">{item.text}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
