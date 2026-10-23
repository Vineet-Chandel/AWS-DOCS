import React, { useState } from 'react';
import { ChapterHeader } from '../../components/documentation/ChapterHeader';
import { ChapterPagination } from '../../components/documentation/ChapterPagination';
import { TerminalPanel } from '../../components/documentation/TerminalPanel';
import { DebuggingFlowchart } from '../../components/documentation/DebuggingFlowchart';
import {
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Check,
  AlertTriangle,
  Info,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Eye,
  FileSearch,
  Layers,
  Wrench,
  CheckSquare,
} from 'lucide-react';

export const DEBUGGING_TOOLKIT_HEADINGS = [
  { id: 'diagnostic-commands', text: 'Diagnostic Commands', level: 2 },
  { id: 'debug-in-layers', text: 'Debug in Layers', level: 2 },
  { id: 'instructor-mini-activity', text: 'Instructor Mini-Activity', level: 2 },
  { id: 'debugging-rule', text: 'Debugging Rule', level: 2 },
  { id: 'before-declaring-fixed', text: 'Before Declaring the Issue Fixed', level: 2 },
];

const CHECKLIST_ITEMS = [
  'The original error is understood or no longer occurs.',
  'The relevant diagnostic command produces the expected result.',
  'The correct website is shown in the browser.',
  'CSS and image assets load correctly.',
  'Network rules remain appropriately restricted.',
  'The final configuration is restored to the intended state.',
];

export function DebuggingToolkitPage({ onNavigate = () => {} }) {
  const [checkedItems, setCheckedItems] = useState(
    CHECKLIST_ITEMS.reduce((acc, _, idx) => ({ ...acc, [idx]: false }), {})
  );

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkAll = () => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = false;
    });
    setCheckedItems(all);
  };

  const breadcrumbs = [
    { id: 'intro-deployment', label: 'AWS Cloud Launchpad' },
    { id: 'troubleshoot-common-errors', label: '04 / Troubleshooting Guide' },
    { id: 'troubleshoot-debugging-toolkit', label: 'Debugging Toolkit' },
  ];

  const diagnosticCommandsText = `# 1. Check the web server
sudo systemctl status nginx --no-pager

# 2. Start it if the service is stopped
sudo systemctl start nginx

# 3. Test HTTP locally
curl -I http://localhost

# 4. Check the deployed files
ls -la /usr/share/nginx/html

# 5. Validate Nginx configuration syntax
sudo nginx -t

# 6. Read recent error logs
sudo tail -n 50 /var/log/nginx/error.log

# 7. Read recent access logs
sudo tail -n 50 /var/log/nginx/access.log

# 8. Test the public endpoint from your laptop
curl -I http://YOUR_PUBLIC_IP`;

  const activitySteps = [
    {
      num: '01',
      title: 'Observe',
      icon: Eye,
      description: 'Ask the student to reproduce or describe the symptom accurately (e.g. browser timeout vs HTTP 403 Forbidden vs Nginx welcome page).',
    },
    {
      num: '02',
      title: 'Collect evidence',
      icon: FileSearch,
      description: 'Ask which command or browser Developer Tools observation narrows down the root cause before touching any settings.',
    },
    {
      num: '03',
      title: 'Identify the layer',
      icon: Layers,
      description: 'Determine whether the failure is in the Nginx service daemon, web root file permissions, or AWS VPC public network ingress.',
    },
    {
      num: '04',
      title: 'Make one controlled fix',
      icon: Wrench,
      description: 'Change only the single setting or file supported by diagnostic evidence. Never change multiple variables simultaneously.',
    },
    {
      num: '05',
      title: 'Verify again',
      icon: CheckSquare,
      description: 'Repeat the relevant diagnostic command, confirm HTTP 200, and verify the website renders cleanly in the browser.',
    },
  ];

  return (
    <article className="max-w-[840px] mx-auto w-full px-4 sm:px-8 py-8 md:py-12">
      {/* Chapter Indicator & Editorial Title */}
      <ChapterHeader
        chapterNumber="04"
        chapterTitle="TROUBLESHOOTING GUIDE"
        pageNumber={2}
        totalPages={2}
        title="Your first debugging toolkit"
        intro="Use these commands as evidence. A command output tells you something specific; it does not prove every other layer is correct."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: Diagnostic Commands */}
      <section id="diagnostic-commands" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Diagnostic Commands
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mb-4">
          Terminal inspection commands isolate each layer of your infrastructure. Run them systematically to gather proof of where a breakdown occurs.
        </p>

        {/* Unified Terminal Command Panel */}
        <TerminalPanel
          label="DIAGNOSTIC COMMANDS — RUN IN THE CONTEXT SHOWN"
          commands={diagnosticCommandsText}
          isSsh={true}
        />

        {/* Execution Context Explanation Banner */}
        <div className="p-3.5 rounded-xl border border-amber-300 dark:border-amber-900/60 bg-amber-50/80 dark:bg-amber-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs my-4">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-workbook-orange shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-medium">
              Run commands 1–7 on EC2. Run command 8 on your laptop. Replace <code className="font-mono bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-amber-300 dark:border-amber-900 text-workbook-navy dark:text-zinc-100">YOUR_PUBLIC_IP</code> with the actual public IPv4 address of your instance.
            </div>
          </div>
        </div>

        {/* Important Correction regarding systemctl start nginx */}
        <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-950/30 text-xs text-slate-700 dark:text-zinc-300 space-y-2 mt-4">
          <div className="font-bold text-workbook-navy dark:text-blue-200 flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono">
            <Info className="w-4 h-4 text-workbook-blue" />
            Important: State-Changing vs Diagnostic Commands
          </div>
          <p className="leading-relaxed">
            <code className="font-mono bg-white dark:bg-zinc-800 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-900 text-workbook-navy dark:text-zinc-200">sudo systemctl start nginx</code> should only be run if the service is stopped or inactive and the available diagnostic evidence indicates that starting it is appropriate.
          </p>
          <p className="leading-relaxed">
            Starting a service is an action that changes system state; it is not merely an inspection command. For an inexperienced student:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-slate-600 dark:text-zinc-400">
            <li>Inspect the service status first with <code className="font-mono">sudo systemctl status nginx</code>.</li>
            <li>Review error logs if it failed (<code className="font-mono">sudo tail -n 50 /var/log/nginx/error.log</code>).</li>
            <li>Check the Nginx configuration syntax using <code className="font-mono">sudo nginx -t</code> before starting or reloading.</li>
            <li>Start the service only when appropriate, then immediately re-test locally with <code className="font-mono">curl -I http://localhost</code>.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: Debug in Layers */}
      <section id="debug-in-layers" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Debug in layers — change one thing at a time
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mb-4">
          Use the diagnostic flowchart below to determine whether your deployment issue is located inside the operating system or out on the AWS VPC network perimeter.
        </p>

        {/* Responsive Debugging Flowchart Component */}
        <DebuggingFlowchart />
      </section>

      {/* SECTION 3: Instructor Mini-Activity */}
      <section id="instructor-mini-activity" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Instructor mini-activity: find the fault
        </h2>
        <p className="text-sm text-slate-700 dark:text-zinc-300 mb-5 leading-relaxed">
          Choose one controlled fault: stop Nginx, temporarily remove the HTTP inbound rule, or move index.html out of the document root. Do not tell students which one you changed. Ask them to describe the symptom, collect evidence, identify the layer, and fix the cause.
        </p>

        {/* 5-Step Compact Sequence */}
        <div className="space-y-3 mb-6">
          {activitySteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flex items-start gap-3.5 p-3.5 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-950 text-white dark:bg-zinc-800 flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Icon className="w-3.5 h-3.5 text-workbook-blue" />
                    <span className="text-xs font-bold text-workbook-navy dark:text-zinc-100">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructor Safety Requirements */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/40 text-xs text-slate-600 dark:text-zinc-400 space-y-2">
          <div className="font-bold text-workbook-navy dark:text-zinc-200 uppercase tracking-wider font-mono text-[11px] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Instructor Safety Requirements
          </div>
          <p className="leading-relaxed">
            This activity is performed only in a controlled workshop instance with instructor approval. Do not make changes to shared production resources. Avoid exposing SSH to the internet. If the security group is changed, do not remove essential administrative access. Restore the original intended configuration before the activity ends. Confirm that the website works after the fault is corrected. Do not hide changes from participants in a way that risks affecting their real AWS resources. The purpose is a safe, reversible learning exercise.
          </p>
        </div>
      </section>

      {/* SECTION 4: Debugging Rule */}
      <section id="debugging-rule" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-4">
          Debugging Rule
        </h2>

        {/* Pale-Green Callout with slim green left border */}
        <div className="p-5 rounded-r-xl rounded-l-md border-l-4 border-workbook-green border-y border-r border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-workbook-green shrink-0 mt-0.5" />
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-900 dark:text-emerald-300">
                DEBUGGING RULE
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-zinc-200 font-medium">
                "If curl to localhost works but the public URL fails, focus on networking: the public address, route, security group, and public connectivity. If localhost fails too, focus on Nginx, configuration, service logs, and deployed files."
              </p>
              <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-900/50 text-xs text-emerald-900/90 dark:text-emerald-300/90">
                <strong>Key Takeaway:</strong> Use the results of one check to decide the next check. Do not change several settings at once, because you may hide the original cause.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Evidence-Based Debugging Checklist */}
      <section id="before-declaring-fixed" className="scroll-mt-24 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
              Before declaring the issue fixed
            </h2>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">
              Verify all criteria before concluding your debugging session.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={checkAll}
              className="px-2.5 py-1 text-xs font-medium rounded border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Check All
            </button>
            <button
              type="button"
              onClick={resetAll}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {CHECKLIST_ITEMS.map((text, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <label
                key={idx}
                htmlFor={`check-fix-${idx}`}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 shadow-2xs'
                    : 'border-workbook-border bg-white dark:border-zinc-800 dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                <input
                  type="checkbox"
                  id={`check-fix-${idx}`}
                  checked={isChecked}
                  onChange={() => toggleCheck(idx)}
                  className="sr-only"
                />

                <div
                  className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>

                <span
                  className={`text-xs sm:text-sm transition-colors ${
                    isChecked
                      ? 'text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/50'
                      : 'text-slate-700 dark:text-zinc-300'
                  }`}
                >
                  {text}
                </span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'troubleshoot-common-errors',
          title: 'Common errors, likely causes and fixes',
          pageLabel: 'Chapter 04 • Page 1',
        }}
        next={{
          id: 'challenge-project-two',
          title: 'Project 2: deploy a multi-page website',
          pageLabel: 'Chapter 05',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}