import React from 'react';

/**
 * The Finish Line callout from Reference Image 1.
 * Distinct, understated pale-blue background with a slim solid blue accent on the left.
 */
export function FinishLineCallout() {
  return (
    <div className="my-8 rounded-r-xl border-l-4 border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 p-5 text-slate-800 dark:text-zinc-200 shadow-xs">
      <div className="text-xs font-bold tracking-wider uppercase font-mono text-blue-700 dark:text-blue-400 mb-1.5 select-none">
        The Finish Line
      </div>
      <p className="text-sm sm:text-base leading-relaxed font-normal text-navy-900 dark:text-zinc-100">
        By the end of this workshop, you should be able to publish a static website using{' '}
        <strong>Amazon EC2</strong>, <strong>Amazon Linux 2023</strong>, and <strong>Nginx</strong>;{' '}
        open it through its public URL; diagnose at least one problem; and attempt a second deployment independently.
      </p>
    </div>
  );
}
