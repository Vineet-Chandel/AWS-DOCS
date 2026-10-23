import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

/**
 * Section 9 & 10: Route Recap & Next Lesson Navigation
 */
export function NextLessonNav({ onNavigate = () => {} }) {
  return (
    <div className="my-10 space-y-8">
      {/* Section 9: Your Deployment Journey */}
      <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/60 p-6">
        <h3 id="your-deployment-journey" className="text-lg font-bold text-navy-900 dark:text-zinc-100 mb-2 scroll-mt-20">
          Your Deployment Journey
        </h3>
        {/* Compact final route */}
        <div className="flex flex-wrap items-center gap-2 p-3 my-3 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs sm:text-sm font-mono text-slate-800 dark:text-zinc-200 font-semibold shadow-2xs">
          <span className="text-blue-600 dark:text-blue-400">GitHub</span>
          <span className="text-slate-400">→</span>
          <span className="text-amber-600 dark:text-amber-400">Amazon EC2 (Amazon Linux 2023)</span>
          <span className="text-slate-400">→</span>
          <span className="text-indigo-600 dark:text-indigo-400">Nginx</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-600 dark:text-emerald-400">Public IPv4 URL</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          This workshop teaches you to serve a static website using Nginx on an EC2 instance. You will publish the files, verify public access, investigate a problem, and practice the process independently.
        </p>
      </div>

      {/* Section 10: Before You Continue / Ready to Begin */}
      <div className="border-t border-slate-200 dark:border-zinc-800 pt-8">
        <h3 id="ready-to-begin" className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-2 scroll-mt-20">
          Ready to Begin?
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
          Before launching your virtual server in AWS, verify you have the required local assets ready, understand your account access tier, and ensure your terminal SSH tools are functioning properly.
        </p>

        {/* Next Chapter Navigation Card */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all group">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">
              Next Lesson • Chapter 02
            </div>
            <div className="text-base font-bold text-navy-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Getting Started &amp; Prerequisites
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Verify your AWS account, configure MFA, and inspect website project files.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('prerequisites')}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 text-white hover:bg-navy-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white font-medium text-sm transition-all shrink-0 shadow-xs focus:outline-none"
          >
            <span>Start Prerequisites</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
