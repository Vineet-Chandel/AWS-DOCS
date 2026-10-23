import React from 'react';
import {
  Globe,
  ShieldAlert,
  Server,
  Lock,
  ArrowRight,
  ArrowDown,
  Cpu,
  Terminal,
  Layers,
  KeyRound,
  Info,
} from 'lucide-react';

/**
 * Interactive, responsive technical diagram of AWS Cloud, VPC, EC2,
 * Security Group, Internet, and IAM for Page 2.
 */
export function AwsNetworkDiagram() {
  return (
    <div className="my-8 space-y-4">
      {/* Outer AWS Cloud Container */}
      <div className="rounded-2xl border-2 border-slate-300 dark:border-zinc-700 bg-slate-50/50 dark:bg-zinc-950 p-4 sm:p-6 relative shadow-xs">
        {/* Cloud Header Badge */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-workbook-orange" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-workbook-navy dark:text-zinc-100">
              AWS CLOUD INFRASTRUCTURE
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
            Region: ap-south-1 (or assigned)
          </span>
        </div>

        {/* Main Grid: Internet, VPC (Security Group + EC2), and IAM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* 1. Outside VPC: Public Internet (3 Cols on Desktop) */}
          <div className="lg:col-span-3 flex flex-col justify-between p-4 rounded-xl border-2 border-workbook-green bg-emerald-50/30 dark:bg-emerald-950/20">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-wider text-workbook-green uppercase">
                  PUBLIC INTERNET
                </span>
                <Globe className="w-4 h-4 text-workbook-green" />
              </div>
              <h4 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1">
                Website Visitors
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-snug">
                Requests sent to your server via its public IPv4 address.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-emerald-900/40">
              <div className="text-[11px] font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-white dark:bg-zinc-900 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800/60 break-all text-center">
                http://YOUR_PUBLIC_IP
              </div>
            </div>
          </div>

          {/* 2. Inside VPC: Logically Isolated Network (6 Cols on Desktop) */}
          <div className="lg:col-span-6 rounded-xl border-2 border-workbook-blue bg-blue-50/20 dark:bg-blue-950/20 p-4 sm:p-5 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-blue-200/80 dark:border-blue-900/40">
              <span className="text-xs font-mono font-bold tracking-wider text-workbook-blue uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                VPC • LOGICALLY ISOLATED NETWORK
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">
                10.0.0.0/16
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              {/* Security Group (Virtual Firewall) */}
              <div className="p-3.5 rounded-lg border-2 border-rose-400 dark:border-rose-700 bg-rose-50/40 dark:bg-rose-950/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400 uppercase">
                      SECURITY GROUP
                    </span>
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h5 className="text-xs font-bold text-workbook-navy dark:text-zinc-100 mb-2">
                    Stateful Firewall
                  </h5>
                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="bg-white dark:bg-zinc-900 p-1.5 rounded border border-rose-200 dark:border-rose-900/50">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">PORT 80 (HTTP)</span>
                      <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">
                        Inbound 0.0.0.0/0 (Public)
                      </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-1.5 rounded border border-rose-200 dark:border-rose-900/50">
                      <span className="text-amber-700 dark:text-amber-400 font-bold">PORT 22 (SSH)</span>
                      <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">
                        Restricted to Admin IP
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-rose-800 dark:text-rose-300 italic">
                  Filters network packets
                </div>
              </div>

              {/* EC2 Instance */}
              <div className="p-3.5 rounded-lg border-2 border-workbook-blue bg-white dark:bg-zinc-900 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-workbook-blue uppercase">
                      EC2 INSTANCE
                    </span>
                    <Server className="w-3.5 h-3.5 text-workbook-blue" />
                  </div>
                  <h5 className="text-xs font-bold text-workbook-navy dark:text-zinc-100 mb-2">
                    Virtual Server
                  </h5>
                  
                  {/* Inner OS + Nginx Stack */}
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 dark:text-zinc-200">
                        <Terminal className="w-3 h-3 text-slate-500" />
                        <span>Amazon Linux 2023</span>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">
                        Host Operating System
                      </p>
                    </div>

                    <div className="p-2 rounded bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 dark:text-indigo-400">
                        <Cpu className="w-3 h-3" />
                        <span>Nginx Web Server</span>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">
                        Listens on port 80 → static files
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-blue-700 dark:text-blue-400 italic">
                  Executes web server daemon
                </div>
              </div>
            </div>
          </div>

          {/* 3. Visually Separate: AWS IAM (3 Cols on Desktop) */}
          <div className="lg:col-span-3 p-4 rounded-xl border-2 border-workbook-purple bg-purple-50/30 dark:bg-purple-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-wider text-workbook-purple uppercase">
                  AWS IAM
                </span>
                <KeyRound className="w-4 h-4 text-workbook-purple" />
              </div>
              <h4 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1">
                Identity &amp; Access
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-snug">
                &ldquo;Who may manage AWS resources?&rdquo; Controls user logins, API keys, and administrative policies.
              </p>
            </div>

            <div className="mt-4 p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-purple-200 dark:border-purple-900/50 text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-300">
                <Lock className="w-3 h-3 text-purple-600" />
                <span>Permissions, Not Network</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-zinc-400">
                IAM does not filter IP addresses. Security groups do not check user roles.
              </p>
            </div>
          </div>

        </div>

        {/* Traffic Flow Path Legend */}
        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-zinc-800 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-slate-800 dark:text-zinc-200">Traffic Flow:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-medium">Visitor (Internet)</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="text-rose-700 dark:text-rose-400 font-medium">Security Group (Port 80 Check)</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="text-blue-700 dark:text-blue-400 font-medium">EC2 Virtual Server</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="text-indigo-700 dark:text-indigo-400 font-medium">Nginx Daemon</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-700 dark:text-zinc-300 font-medium">Website HTML/CSS Files</span>
        </div>
      </div>

      {/* Critical Conceptual Takeaway Callout */}
      <div className="rounded-xl border border-workbook-border dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-start gap-3">
        <Info className="w-4 h-4 text-workbook-blue shrink-0 mt-0.5" />
        <div>
          <strong className="text-workbook-navy dark:text-zinc-100">Remember:</strong> IAM decides which actions an identity can perform in AWS. A security group filters network traffic. They solve completely different problems.
        </div>
      </div>

      <div className="text-[11px] text-slate-400 dark:text-zinc-500 text-center italic">
        Conceptual teaching diagram. The actual VPC, route table, subnet, and public address depend on the workshop account configuration.
      </div>
    </div>
  );
}
