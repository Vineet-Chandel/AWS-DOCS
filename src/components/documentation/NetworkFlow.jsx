import React from 'react';
import { ArrowRight, ShieldCheck, Laptop, Globe, Server, Cpu, FileCode2, Terminal, ShieldAlert } from 'lucide-react';

/**
 * Visual networking flows for visitor HTTP access and administrator SSH access.
 */
export function NetworkFlow() {
  const visitorSteps = [
    {
      title: "Visitor's Browser",
      detail: "The person enters your website's public URL in their browser address bar.",
      icon: Globe,
      badge: 'REQUEST',
      tagColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Security Group',
      detail: 'AWS acts as a virtual firewall, checking whether inbound TCP port 80 traffic is permitted.',
      icon: ShieldCheck,
      badge: 'FIREWALL :80',
      tagColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'EC2 Public IP',
      detail: 'Traffic routes through the public IPv4 address directly into your virtual server.',
      icon: Server,
      badge: 'AWS CLOUD',
      tagColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Nginx',
      detail: 'The web server receives the HTTP request and handles routing.',
      icon: Cpu,
      badge: 'DAEMON',
      tagColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      title: 'Website Files',
      detail: 'Nginx serves the matching HTML, CSS, and asset files back to the visitor.',
      icon: FileCode2,
      badge: 'RESPONSE',
      tagColor: 'text-emerald-600 dark:text-emerald-400',
    },
  ];

  const adminSteps = [
    {
      title: 'Your Computer',
      detail: 'Local terminal executing the secure shell client (`ssh -i key.pem ...`).',
      icon: Laptop,
      badge: 'ADMIN CLIENT',
    },
    {
      title: 'SSH Protocol',
      detail: 'Encrypted tunnel connecting over TCP port 22 using your private key pair.',
      icon: Terminal,
      badge: 'TCP :22 ENCRYPTED',
    },
    {
      title: 'EC2 Terminal',
      detail: 'Root / ec2-user shell access for installing software and managing files.',
      icon: Server,
      badge: 'SERVER SHELL',
    },
  ];

  return (
    <div className="space-y-12 my-8">
      {/* 1. VISITOR PATH */}
      <div>
        <h3 id="how-visitors-reach-your-website" className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3 scroll-mt-20">
          How Does Someone Open Your Website?
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
          Understanding network routing helps you troubleshoot deployment issues quickly. When a visitor requests your URL, their connection travels through five distinct stages:
        </p>

        {/* Visitor Visual Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-6">
          {visitorSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === visitorSteps.length - 1;

            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold font-mono tracking-wider ${step.tagColor}`}>
                      {step.badge}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                  </div>
                  <h4 className="text-xs font-bold text-navy-900 dark:text-zinc-100 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-snug">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Networking Detail Callout */}
        <div className="rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 flex items-start gap-3">
          <div className="p-1 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <strong className="text-amber-900 dark:text-amber-300">Core Networking Rule:</strong>{' '}
            HTTP uses <strong>TCP port 80</strong> in this exercise. The EC2 security group&apos;s inbound rules must explicitly permit HTTP traffic from <code>0.0.0.0/0</code> for the website to be publicly accessible to visitors.
          </div>
        </div>
      </div>

      {/* 2. ADMINISTRATOR PATH */}
      <div>
        <h3 id="how-you-connect-to-the-server" className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3 scroll-mt-20">
          How Do You Manage the EC2 Instance?
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
          Managing your cloud server requires administrative access that is isolated from public visitor traffic:
        </p>

        {/* Admin Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {adminSteps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold font-mono tracking-wider text-slate-500 dark:text-zinc-400">
                      {step.badge}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h4 className="text-sm font-bold text-navy-900 dark:text-zinc-100 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-snug">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Note Callout */}
        <div className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 p-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 dark:text-zinc-100">Security Distinction:</strong>{' '}
            HTTP access for visitors and SSH access for administrators serve different purposes. Do not leave administrative access unnecessarily open to everyone. Restrict port 22 access to your current IP address (<code>My IP</code>) whenever possible.
          </div>
        </div>
      </div>
    </div>
  );
}
