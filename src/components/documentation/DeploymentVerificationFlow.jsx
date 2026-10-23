import React from 'react';
import { ArrowRight, ArrowDown, Server, Cpu, FileCode2, Terminal, Globe, CheckCircle2 } from 'lucide-react';

/**
 * Responsive visual verification sequence:
 * EC2 Running → Nginx Active → Files Present → Local HTTP Success → Public HTTP Success → Browser Displays Website
 */
export function DeploymentVerificationFlow() {
  const steps = [
    { title: 'EC2 Running', icon: Server, badge: 'COMPUTE', color: 'text-workbook-blue border-blue-400 bg-blue-50/50 dark:bg-blue-950/30' },
    { title: 'Nginx Active', icon: Cpu, badge: 'DAEMON', color: 'text-workbook-teal border-teal-400 bg-teal-50/50 dark:bg-teal-950/30' },
    { title: 'Files Present', icon: FileCode2, badge: 'ASSETS', color: 'text-workbook-purple border-purple-400 bg-purple-50/50 dark:bg-purple-950/30' },
    { title: 'Local HTTP Success', icon: Terminal, badge: 'LOCAL :80', color: 'text-workbook-orange border-amber-400 bg-amber-50/50 dark:bg-amber-950/30' },
    { title: 'Public HTTP Success', icon: Globe, badge: 'NETWORK :80', color: 'text-indigo-600 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30' },
    { title: 'Browser Displays Website', icon: CheckCircle2, badge: 'LIVE VISITOR', color: 'text-workbook-green border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30' },
  ];

  return (
    <div className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 items-center relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;

          return (
            <React.Fragment key={idx}>
              <div className={`p-3 rounded-xl border ${step.color} flex flex-col justify-between text-center min-h-[90px] shadow-2xs`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase opacity-80">
                    {step.badge}
                  </span>
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                </div>
                <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 leading-tight">
                  {step.title}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] text-slate-500 dark:text-zinc-400 text-center italic">
        Sequential verification pipeline. Each milestone builds confidence before testing the next layer.
      </p>
    </div>
  );
}
