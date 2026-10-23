import React from 'react';
import { ArrowDown, CheckCircle2, XCircle, AlertCircle, Terminal, Globe, Server, ShieldCheck, Network } from 'lucide-react';

/**
 * Responsive layered debugging flowchart:
 * 1. Initial symptom: Website does not load (Blue)
 * 2. Diagnostic decision: Run `curl -I http://localhost` (Orange)
 * 3. Two branches:
 *    - Green (YES — local request works): Focus on Public IP, Security Group, Route Table, IGW.
 *    - Red (NO — local request fails): Focus on Nginx status, error logs, config, web root files.
 * 4. Closing rule: "IF THE LOCAL SERVER RESPONDS BUT THE PUBLIC URL DOES NOT, START WITH NETWORKING — NOT THE HTML."
 */
export function DebuggingFlowchart() {
  return (
    <div className="my-8 rounded-2xl border border-workbook-border dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50 p-5 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-workbook-orange">
            DIAGNOSTIC WORKFLOW
          </span>
          <h3 className="text-base sm:text-lg font-serif font-bold text-workbook-navy dark:text-zinc-100 mt-0.5">
            Two-Branch Diagnostic Flowchart
          </h3>
        </div>
        <span className="hidden sm:inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
          SYSTEMATIC ISOLATION
        </span>
      </div>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        {/* Step 1: Initial Symptom (Blue) */}
        <div className="w-full sm:w-80 p-4 rounded-xl border-2 border-workbook-blue bg-blue-50/70 dark:bg-blue-950/40 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Globe className="w-4 h-4 text-workbook-blue" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-900 dark:text-blue-300">
              OBSERVED SYMPTOM
            </span>
          </div>
          <div className="text-base font-bold text-workbook-navy dark:text-zinc-100 font-serif">
            Website does not load
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">
            Browser shows connection timeout, connection refused, or infinite loading.
          </p>
        </div>

        {/* Downward Connector */}
        <div className="flex flex-col items-center my-2 select-none text-slate-400 dark:text-zinc-500">
          <div className="w-0.5 h-6 bg-slate-300 dark:bg-zinc-700" />
          <ArrowDown className="w-4 h-4 -mt-1 stroke-[2.5]" />
        </div>

        {/* Step 2: Diagnostic Isolation Step (Orange) */}
        <div className="w-full sm:w-96 p-4 rounded-xl border-2 border-workbook-orange bg-amber-50/70 dark:bg-amber-950/40 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Terminal className="w-4 h-4 text-workbook-orange" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-900 dark:text-amber-300">
              ISOLATION CHECK (RUN ON EC2)
            </span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-workbook-navy dark:text-zinc-100 bg-white dark:bg-zinc-900 py-1.5 px-3 rounded-md border border-amber-200 dark:border-amber-900/60 my-1 inline-block">
            curl -I http://localhost
          </div>
          <div className="text-xs font-medium text-amber-950 dark:text-amber-200 italic mt-1">
            "Does the server answer locally?"
          </div>
        </div>

        {/* Branch Split Connectors (Desktop Horizontal / Mobile Vertical) */}
        <div className="w-full relative mt-3 mb-2 hidden md:block">
          <div className="h-0.5 bg-slate-300 dark:bg-zinc-700 w-3/4 mx-auto" />
          <div className="flex justify-between w-3/4 mx-auto">
            <div className="w-0.5 h-6 bg-emerald-500 -mt-0.5" />
            <div className="w-0.5 h-6 bg-rose-500 -mt-0.5" />
          </div>
        </div>

        {/* Two Branches: Green (YES) and Red (NO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-2">
          {/* Branch A: Green (YES) */}
          <div className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                  YES — LOCAL REQUEST WORKS
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-950 dark:text-emerald-200 mb-2">
                Nginx is running and serving files internally.
              </p>
              <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/80 border border-emerald-200 dark:border-emerald-900/50 text-xs text-slate-700 dark:text-zinc-300 space-y-1.5">
                <div className="font-bold text-emerald-900 dark:text-emerald-300 text-[11px] uppercase tracking-wide">
                  Next Diagnostic Focus: Public Network
                </div>
                <p className="leading-relaxed text-[11px]">
                  Check the <strong>Public IPv4 address</strong>, verify <strong>Inbound Security Group port 80</strong> allows traffic from <code className="font-mono text-[10px] bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">0.0.0.0/0</code>, and confirm subnet <strong>Route Table</strong> routes to an <strong>Internet Gateway</strong>.
                </p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200/80 dark:border-emerald-900/40 text-[11px] text-emerald-800 dark:text-emerald-300/80 italic">
              Note: Do not modify website HTML; the server already serves it locally.
            </div>
          </div>

          {/* Branch B: Red (NO) */}
          <div className="p-4 rounded-xl border-2 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300">
                  NO — LOCAL REQUEST FAILS
                </span>
              </div>
              <p className="text-xs font-semibold text-rose-950 dark:text-rose-200 mb-2">
                Nginx is stopped, crashing, or misconfigured.
              </p>
              <div className="p-3 rounded-lg bg-white/90 dark:bg-zinc-900/80 border border-rose-200 dark:border-rose-900/50 text-xs text-slate-700 dark:text-zinc-300 space-y-1.5">
                <div className="font-bold text-rose-900 dark:text-rose-300 text-[11px] uppercase tracking-wide">
                  Next Diagnostic Focus: Internal Web Server
                </div>
                <p className="leading-relaxed text-[11px]">
                  Check <strong>Nginx service status</strong> (<code className="font-mono text-[10px] bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">systemctl status nginx</code>), inspect <strong>error logs</strong> (<code className="font-mono text-[10px] bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/var/log/nginx/error.log</code>), validate <strong>syntax</strong> (<code className="font-mono text-[10px] bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">nginx -t</code>), and confirm <strong>file permissions</strong>.
                </p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-rose-200/80 dark:border-rose-900/40 text-[11px] text-rose-800 dark:text-rose-300/80 italic">
              Note: Changing AWS Security Groups will not help if Nginx is dead.
            </div>
          </div>
        </div>

        {/* Closing Rule Banner */}
        <div className="w-full mt-6 p-4 rounded-xl border border-workbook-navy bg-navy-950 text-white dark:bg-zinc-900 dark:border-zinc-700 text-center shadow-md">
          <div className="flex items-center justify-center gap-2 mb-1">
            <AlertCircle className="w-4 h-4 text-workbook-orange shrink-0" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-workbook-orange">
              GOLDEN DEBUGGING RULE
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold tracking-tight text-white dark:text-zinc-100 uppercase">
            IF THE LOCAL SERVER RESPONDS BUT THE PUBLIC URL DOES NOT, START WITH NETWORKING — NOT THE HTML.
          </p>
        </div>
      </div>
    </div>
  );
}