import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Bottom pagination for navigating seamlessly between sequential workbook pages.
 */
export function ChapterPagination({
  prev = null, // { id: string, title: string, pageLabel: string }
  next = null, // { id: string, title: string, pageLabel: string }
  onNavigate = () => {},
}) {
  return (
    <div className="mt-12 pt-8 border-t border-workbook-border dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      {/* Previous Page Link */}
      {prev ? (
        <button
          type="button"
          onClick={() => onNavigate(prev.id)}
          className="flex-1 flex items-start gap-3 p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 text-left hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50/60 dark:hover:bg-zinc-850 transition-all group focus:outline-none shadow-xs"
        >
          <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:text-workbook-blue group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors mt-0.5">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-workbook-muted dark:text-zinc-400 block mb-0.5">
              Previous {prev.pageLabel ? `• ${prev.pageLabel}` : ''}
            </span>
            <span className="text-sm font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors line-clamp-1">
              {prev.title}
            </span>
          </div>
        </button>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}

      {/* Next Page Link */}
      {next && (
        <button
          type="button"
          onClick={() => onNavigate(next.id)}
          className="flex-1 flex items-start justify-between gap-3 p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 text-right hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50/60 dark:hover:bg-zinc-850 transition-all group focus:outline-none shadow-xs"
        >
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-workbook-muted dark:text-zinc-400 block mb-0.5">
              Next {next.pageLabel ? `• ${next.pageLabel}` : ''}
            </span>
            <span className="text-sm font-bold text-workbook-navy dark:text-zinc-100 group-hover:text-workbook-blue transition-colors line-clamp-1">
              {next.title}
            </span>
          </div>
          <div className="p-2 rounded-lg bg-workbook-navy text-white dark:bg-zinc-100 dark:text-zinc-900 group-hover:bg-workbook-blue dark:group-hover:bg-white transition-colors mt-0.5 shrink-0">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>
      )}
    </div>
  );
}
