import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Clickable breadcrumb navigation showing document location.
 */
export function Breadcrumbs({ items = [], onNavigate = () => {} }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 mb-4 select-none">
      <button
        type="button"
        onClick={() => onNavigate('overview')}
        className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors focus:outline-none"
      >
        <Home className="w-3.5 h-3.5 opacity-70" />
        <span>Docs</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.id || index}>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-zinc-600 shrink-0" />
            {isLast ? (
              <span className="font-medium text-slate-900 dark:text-zinc-100 truncate" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors focus:outline-none truncate"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
