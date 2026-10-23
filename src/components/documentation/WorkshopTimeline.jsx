import React from 'react';

/**
 * Responsive 120-minute run plan timeline grid with 6 phases.
 * Follows the exact layout, colors, and timing from Reference Image 1.
 */
export function WorkshopTimeline() {
  const items = [
    {
      time: '00–15 MIN • KICKOFF',
      desc: 'Explain deployment, tools, IAM, networking, and cost awareness.',
      stage: 'START',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      time: '15–30 MIN • FILE TOUR',
      desc: 'Open the GitHub repository and identify the website entry files.',
      stage: 'UNDERSTAND',
      color: 'text-teal-600 dark:text-teal-400',
    },
    {
      time: '30–65 MIN • BUILD',
      desc: 'Launch EC2, connect to it, install Nginx, and publish the website files.',
      stage: 'DEPLOY',
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      time: '65–75 MIN • VERIFY',
      desc: 'Check Nginx, HTTP status, and the public website URL.',
      stage: 'PROVE IT',
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      time: '75–105 MIN • CHALLENGE',
      desc: 'Deploy a second project independently, using hints rather than a command-by-command walkthrough.',
      stage: 'PRACTICE',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      time: '105–120 MIN • WRAP',
      desc: 'Discuss troubleshooting, safe resource cleanup, and further learning.',
      stage: 'FINISH',
      color: 'text-rose-600 dark:text-rose-400',
    },
  ];

  return (
    <div className="my-8">
      {/* Timeline Grid Container */}
      <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-slate-200 dark:divide-zinc-800 sm:[&>*:not(:nth-child(-n+3))]:border-t sm:[&>*:not(:nth-child(-n+3))]:border-slate-200 dark:sm:[&>*:not(:nth-child(-n+3))]:border-zinc-800 lg:[&>*:not(:nth-child(3n+1))]:border-l lg:[&>*:not(:nth-child(3n+1))]:border-slate-200 dark:lg:[&>*:not(:nth-child(3n+1))]:border-zinc-800">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 flex flex-col justify-between hover:bg-slate-50/50 dark:hover:bg-zinc-900/40 transition-colors"
            >
              <div>
                <div className={`text-xs font-bold tracking-wider font-mono uppercase mb-2 ${item.color}`}>
                  {item.time}
                </div>
                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-snug">
                  {item.desc}
                </p>
              </div>
              <div className={`mt-4 text-[11px] font-bold tracking-wider uppercase font-mono ${item.color}`}>
                {item.stage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Route Summary Footer Note */}
      <p className="mt-4 text-xs italic text-slate-600 dark:text-zinc-400 leading-relaxed">
        <strong>Workshop route:</strong> GitHub → Amazon EC2 (Amazon Linux 2023) → Nginx → public IPv4 URL. This workshop serves static website files; it does not need a database or Node.js runtime on the server.
      </p>
    </div>
  );
}
