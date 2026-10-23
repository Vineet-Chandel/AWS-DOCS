import React from 'react';
import { Check, X, Info } from 'lucide-react';

/**
 * Two-column comparison clarifying what the workshop uses and what it does not need.
 */
export function WorkshopComparison() {
  const whatWeUse = [
    'GitHub repository containing static website files',
    'Amazon EC2 for the virtual server',
    'Amazon Linux 2023 as the operating system',
    'Nginx as the web server daemon',
    'A public IPv4 address for browser access',
  ];

  const whatWeDontNeed = [
    'A database (RDS, DynamoDB, or MySQL)',
    'A Node.js server runtime process on EC2',
    'A backend API or Python/Ruby/Java application server',
    'A server-side frontend framework running on the host',
  ];

  return (
    <div className="my-8">
      <h3 id="what-this-workshop-uses" className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3 scroll-mt-20">
        What This Workshop Uses — and What It Doesn&apos;t
      </h3>
      <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
        Keeping your mental model clean is critical when learning the cloud. Because we are deploying a static website, our server requirements are intentionally lean:
      </p>

      {/* 2-Column Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* What We Use */}
        <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/20 dark:bg-emerald-950/10 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-mono">
              What We Use
            </h4>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-zinc-200">
            {whatWeUse.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What We Don't Need */}
        <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
              <X className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 font-mono">
              What We Don&apos;t Need For This Exercise
            </h4>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            {whatWeDontNeed.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clarification Callout */}
      <div className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 flex items-start gap-3">
        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 dark:text-zinc-100">Important distinction:</strong> A static website may still contain rich client-side JavaScript that executes inside the visitor&apos;s browser. However, the EC2 server does not execute a background Node.js or Python runtime; Nginx simply reads files from disk and transfers them over HTTP.
        </div>
      </div>
    </div>
  );
}
