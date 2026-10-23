import React from 'react';
import { ArrowRight, ArrowDown, GitBranch, Server, Cpu, Globe } from 'lucide-react';

/**
 * 4-stage deployment pipeline from repository to live website.
 * Faithful reproduction of Reference Image 1 with responsive desktop/mobile layouts.
 */
export function DeploymentFlow() {
  const stages = [
    {
      num: '01',
      tag: 'SOURCE',
      title: 'GitHub repository',
      subtitle: 'index.html + assets',
      icon: GitBranch,
      color: {
        border: 'border-blue-500 dark:border-blue-500',
        bg: 'bg-blue-50/30 dark:bg-blue-950/20',
        badge: 'text-blue-600 dark:text-blue-400',
      },
    },
    {
      num: '02',
      tag: 'COMPUTE',
      title: 'Amazon EC2',
      subtitle: 'Amazon Linux 2023',
      icon: Server,
      color: {
        border: 'border-amber-500 dark:border-amber-500',
        bg: 'bg-amber-50/30 dark:bg-amber-950/20',
        badge: 'text-amber-600 dark:text-amber-400',
      },
    },
    {
      num: '03',
      tag: 'WEB SERVER',
      title: 'Nginx',
      subtitle: 'Serves files on port 80',
      icon: Cpu,
      color: {
        border: 'border-indigo-500 dark:border-indigo-400',
        bg: 'bg-indigo-50/30 dark:bg-indigo-950/20',
        badge: 'text-indigo-600 dark:text-indigo-400',
      },
    },
    {
      num: '04',
      tag: 'VISITOR',
      title: 'Browser + public IP',
      subtitle: 'http://YOUR_PUBLIC_IP',
      icon: Globe,
      color: {
        border: 'border-emerald-500 dark:border-emerald-500',
        bg: 'bg-emerald-50/30 dark:bg-emerald-950/20',
        badge: 'text-emerald-600 dark:text-emerald-400',
      },
    },
  ];

  return (
    <div className="my-8">
      {/* Section Eyebrow */}
      <div className="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200 mb-4 select-none">
        From Repository to Live Website
      </div>

      {/* 4-Stage Horizontal (Desktop) / Vertical (Mobile) Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center relative">
        {stages.map((stage, idx) => {
          const isLast = idx === stages.length - 1;
          const Icon = stage.icon;

          return (
            <React.Fragment key={stage.num}>
              {/* Stage Card */}
              <div
                className={`relative flex flex-col justify-between p-4 rounded-xl border-2 ${stage.color.border} ${stage.color.bg} bg-white dark:bg-zinc-900/80 shadow-xs min-h-[110px] transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold tracking-wider font-mono uppercase ${stage.color.badge}`}>
                    {stage.num} {stage.tag}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${stage.color.badge} opacity-80`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 dark:text-zinc-100 tracking-tight leading-snug">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-0.5">
                    {stage.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow connector between steps (desktop: horizontal; mobile: downward) */}
              {!isLast && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 pointer-events-none z-10"
                     style={{ left: `calc(${(idx + 1) * 25}% - 12px)` }}>
                  <ArrowRight className="w-5 h-5 text-slate-400 dark:text-zinc-600" />
                </div>
              )}
              {!isLast && (
                <div className="flex md:hidden justify-center py-0.5">
                  <ArrowDown className="w-4 h-4 text-slate-400 dark:text-zinc-600" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Network and Admin Paths */}
      <div className="mt-4 pt-3 space-y-1.5 text-xs font-sans border-t border-slate-100 dark:border-zinc-800/80">
        <div className="flex flex-wrap items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
          <span className="font-bold">Network path:</span>
          <span>Visitor</span>
          <span>→</span>
          <span>Security Group (HTTP :80)</span>
          <span>→</span>
          <span>EC2</span>
          <span>→</span>
          <span>Nginx</span>
          <span>→</span>
          <span>website files</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-slate-500 dark:text-zinc-400 text-[11px]">
          <span className="font-semibold text-slate-600 dark:text-zinc-300">Administrator path:</span>
          <span>Your computer</span>
          <span>→</span>
          <span>SSH (port 22, restricted to your IP)</span>
          <span>→</span>
          <span>EC2 terminal</span>
        </div>
      </div>
    </div>
  );
}
