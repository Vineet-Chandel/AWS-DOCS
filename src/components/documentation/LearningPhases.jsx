import React from 'react';

/**
 * Three connected learning phases from Reference Image 1.
 */
export function LearningPhases() {
  const phases = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: 'Learn the AWS words and prepare your access.',
      tag: 'INTRO + PREREQUISITES',
      color: 'text-blue-600 dark:text-blue-400',
      bgLight: 'hover:bg-blue-50/20 dark:hover:bg-blue-950/10',
    },
    {
      num: '02',
      title: 'DEPLOY',
      desc: 'Launch EC2, install Nginx, publish website files.',
      tag: 'MENTOR-LED BUILD',
      color: 'text-amber-600 dark:text-amber-400',
      bgLight: 'hover:bg-amber-50/20 dark:hover:bg-amber-950/10',
    },
    {
      num: '03',
      title: 'PROVE IT',
      desc: 'Use the URL, commands and browser to verify.',
      tag: 'CHECK + DEBUG',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgLight: 'hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10',
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xs overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-zinc-800">
        {phases.map((phase) => (
          <div
            key={phase.num}
            className={`p-5 flex flex-col justify-between transition-colors ${phase.bgLight}`}
          >
            <div>
              <div className={`text-xs font-bold tracking-wider uppercase font-mono mb-2 ${phase.color}`}>
                {phase.num} {phase.title}
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                {phase.desc}
              </p>
            </div>
            <div className={`mt-4 text-[11px] font-bold tracking-wider uppercase font-mono ${phase.color}`}>
              {phase.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
