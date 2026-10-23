import React, { useState } from 'react';
import { ChapterHeader } from '../components/documentation/ChapterHeader';
import { ChapterPagination } from '../components/documentation/ChapterPagination';
import { ScreenshotTargetsGrid } from '../components/documentation/ScreenshotTargetsGrid';
import {
  CheckCircle2,
  Check,
  RotateCcw,
  Sparkles,
  Camera,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  HelpCircle,
  FileCheck2,
  Users,
  Info,
} from 'lucide-react';

export const INSTRUCTOR_CHECKLIST_HEADINGS = [
  { id: 'screenshot-targets-for-the-live-workshop', text: 'Screenshot Targets for the Live Workshop', level: 2 },
  { id: 'capture-these-live-screenshots', text: 'Capture These Live Screenshots During the Workshop', level: 2 },
  { id: 'pre-event-review-checklist', text: 'Pre-Event Review Checklist', level: 2 },
  { id: 'end-of-class-assessment', text: 'End-of-Class Assessment', level: 2 },
  { id: 'ready-for-review', text: 'Ready for Review', level: 2 },
];

const PRE_EVENT_TASKS = [
  {
    title: 'Confirm learners can sign in to the approved AWS account or sandbox.',
    desc: 'Verify the login URL, IAM Identity Center or federated portal, and temporary credential procedures before participants arrive.',
  },
  {
    title: 'Confirm the workshop role has the required EC2 and network permissions.',
    desc: 'Test the permissions boundary using the learner role. Participants should not need broad administrator access to bypass permission errors.',
  },
  {
    title: 'On a test laptop, verify the first repository and branch are accessible.',
    desc: 'Confirm the template repository (zirafa/simple-website-template) clones cleanly and public files are intact.',
  },
  {
    title: 'Complete one live deployment end-to-end in the actual workshop account and record console differences.',
    desc: 'Rehearse launching EC2, network rules, SSH, Nginx install, file copying, and public IPv4 verification in the exact training Region.',
  },
  {
    title: 'Confirm the second repository has index.html, about.html, css/, js/, and 404.html.',
    desc: 'Inspect Maryam-Skaik/static-website-demo to ensure the multi-page challenge matches current asset filenames and subdirectories.',
  },
  {
    title: 'Assign one organiser to permission issues and one to resource cleanup.',
    desc: 'Designate specific team members to handle credential resets, IAM troubleshooting, and end-of-day instance teardowns.',
  },
  {
    title: 'Recheck current pricing, resource naming and cleanup expectations before event day.',
    desc: 'Ensure resource naming conventions (e.g. learner-name-ec2) are clear, and confirm who is authorized to terminate resources.',
  },
];

const MENTOR_ANSWERS = [
  {
    q: '1. EC2 versus GitHub:',
    a: 'GitHub stores and versions source code; EC2 provides the cloud virtual machine where the website server runs.',
  },
  {
    q: '2. Why Nginx:',
    a: 'It serves the website files and responds to incoming HTTP requests on port 80.',
  },
  {
    q: '3. IAM versus security group:',
    a: 'IAM controls permitted AWS API actions for identities; security groups filter network traffic at the instance boundary.',
  },
  {
    q: '4. Local curl test:',
    a: 'It checks the HTTP response from the EC2 instance itself (loopback) but does not prove public network reachability or that every asset renders in a browser.',
  },
  {
    q: '5. Restricting SSH:',
    a: 'It reduces unnecessary exposure of the administrative port 22 connection to the public internet.',
  },
  {
    q: '6. Resource cleanup:',
    a: 'Review and terminate the EC2 instance, and inspect separately retained EBS storage volumes, snapshots, or Elastic IPs created for the workshop.',
  },
];

const REVIEW_ITEMS = [
  'The full deployment was rehearsed.',
  'The correct repository links were checked.',
  'Account-specific instructions were confirmed.',
  'Actual evidence screenshots were captured where needed.',
  'Secrets and sensitive account details were removed.',
  'Cleanup ownership and instructions were confirmed.',
];

export function InstructorOrganiserChecklistPage({ onNavigate = () => {} }) {
  const [checkedItems, setCheckedItems] = useState(
    PRE_EVENT_TASKS.reduce((acc, _, idx) => ({ ...acc, [idx]: false }), {})
  );

  const [isMentorNotesOpen, setIsMentorNotesOpen] = useState(false);

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkAll = () => {
    const all = {};
    PRE_EVENT_TASKS.forEach((_, idx) => {
      all[idx] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    const all = {};
    PRE_EVENT_TASKS.forEach((_, idx) => {
      all[idx] = false;
    });
    setCheckedItems(all);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = PRE_EVENT_TASKS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const breadcrumbs = [
    { id: 'overview', label: 'AWS Cloud Launchpad' },
    { id: 'instructor-checklist', label: '09 / Instructor & Organiser Checklist' },
  ];

  return (
    <article className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 md:py-12">
      {/* Chapter Indicator & Editorial Title */}
      <ChapterHeader
        chapterNumber="09"
        chapterTitle="INSTRUCTOR AND ORGANISER CHECKLIST"
        pageNumber={1}
        totalPages={1}
        title="Make the workshop reproducible"
        intro="These checks help mentors avoid account-specific surprises and keep the lab safe for everyone."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: Screenshot Targets for the Live Workshop */}
      <section id="screenshot-targets-for-the-live-workshop" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Screenshot targets for the live workshop
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-4">
          Visual capture instructions illustrating what evidence participants must save during the session:
        </p>

        {/* 5-Item Screenshot Targets Component */}
        <ScreenshotTargetsGrid />
      </section>

      {/* SECTION 2: Capture These Live Screenshots During the Workshop */}
      <section id="capture-these-live-screenshots" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-3">
          Capture these live screenshots during the workshop
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-4">
          Ensure learners collect these five evidence captures throughout the workshop:
        </p>

        <ul className="space-y-3 p-5 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-workbook-blue mt-2 shrink-0" />
            <div>
              <strong className="text-workbook-navy dark:text-zinc-100">EC2 Launch instance page:</strong> Selected operating system (Amazon Linux 2023), instance type (<code className="font-mono text-xs">t2.micro</code> or <code className="font-mono text-xs">t3.micro</code>), and key-pair name.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-workbook-blue mt-2 shrink-0" />
            <div>
              <strong className="text-workbook-navy dark:text-zinc-100">Security-group inbound rules:</strong> SSH restricted to My IP or the approved administration network, and HTTP enabled on port 80.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-workbook-blue mt-2 shrink-0" />
            <div>
              <strong className="text-workbook-navy dark:text-zinc-100">EC2 Instances page:</strong> Instance state <strong className="text-emerald-700 dark:text-emerald-400">Running</strong>, status checks 2/2 passed, and assigned Public IPv4 address.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-workbook-blue mt-2 shrink-0" />
            <div>
              <strong className="text-workbook-navy dark:text-zinc-100">Terminal:</strong> Successful SSH login prompt, Nginx service active, and local HTTP request (<code className="font-mono text-xs">curl -I http://localhost</code>) returning HTTP 200 OK.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-workbook-blue mt-2 shrink-0" />
            <div>
              <strong className="text-workbook-navy dark:text-zinc-100">Browser:</strong> The deployed website rendering in the browser with its live public IPv4 address clearly visible.
            </div>
          </li>
        </ul>

        {/* Facilitator Guidance Box */}
        <div className="mt-4 p-4 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-950/30 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-workbook-blue shrink-0 mt-0.5" />
            <div>
              <strong>Facilitator Note:</strong> Capture evidence from the actual workshop environment after each stage has been completed. If a student encounters an error, record the relevant non-sensitive diagnostic information rather than presenting an unsuccessful test as a successful result. The browser screenshot is the principal evidence that the expected website is rendered at the actual public URL.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Pre-Event Review Checklist */}
      <section id="pre-event-review-checklist" className="scroll-mt-24 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
              Pre-event review checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1">
              Complete these checks on a test machine in the actual workshop environment before event day.
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

        {/* Progress Bar */}
        <div className="p-3.5 mb-5 rounded-xl border border-workbook-border dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 flex items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              completedCount === totalCount
                ? 'bg-emerald-500 text-white'
                : 'bg-workbook-navy text-white dark:bg-zinc-800 dark:text-zinc-200'
            }`}>
              {completedCount === totalCount ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                `${completedCount}/${totalCount}`
              )}
            </div>
            <div>
              <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100">
                {completedCount === totalCount
                  ? 'All Pre-Event Checks Completed!'
                  : `${completedCount} of ${totalCount} review checks complete`}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                {completedCount === totalCount
                  ? 'The workshop environment is rehearsed and ready for learners.'
                  : 'Execute each verification item to ensure a smooth workshop.'}
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-36">
            <div className="h-2 w-full bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-workbook-green transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[10px] text-right font-mono text-slate-500 dark:text-zinc-400 mt-1">
              {progressPercent}% verified
            </div>
          </div>
        </div>

        {/* 7 Checklist Tasks */}
        <div className="space-y-3">
          {PRE_EVENT_TASKS.map((item, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <label
                key={idx}
                htmlFor={`preevent-${idx}`}
                className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 shadow-2xs'
                    : 'border-workbook-border bg-white dark:border-zinc-800 dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                <input
                  type="checkbox"
                  id={`preevent-${idx}`}
                  checked={isChecked}
                  onChange={() => toggleCheck(idx)}
                  className="sr-only"
                />

                <div
                  className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-zinc-500 uppercase">
                      CHECK {idx + 1}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isChecked
                          ? 'text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/50'
                          : 'text-workbook-navy dark:text-zinc-100'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: End-of-Class Assessment */}
      <section id="end-of-class-assessment" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-3">
          End-of-class assessment
        </h2>
        <div className="p-5 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs mb-4">
          <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed">
            <strong>Ask participants:</strong> (1) What does EC2 do versus GitHub? (2) Why do we need Nginx? (3) How is IAM different from a security group? (4) What does <code className="font-mono text-xs bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">curl -I http://localhost</code> prove—and not prove? (5) Why is SSH restricted? (6) Which resources must be cleaned up?
          </p>
        </div>

        {/* Expandable Mentor Notes */}
        <div className="rounded-xl border border-slate-200 dark:border-zinc-800 overflow-hidden">
          <button
            type="button"
            onClick={() => setIsMentorNotesOpen((prev) => !prev)}
            className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-900 text-left hover:bg-slate-100 dark:hover:bg-zinc-850 transition-colors"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-workbook-blue" />
              <span className="text-xs sm:text-sm font-bold text-workbook-navy dark:text-zinc-100">
                Mentor notes — what good answers should cover
              </span>
            </div>
            {isMentorNotesOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {isMentorNotesOpen && (
            <div className="p-4 sm:p-5 bg-white dark:bg-zinc-900/60 divide-y divide-slate-100 dark:divide-zinc-800 space-y-3">
              {MENTOR_ANSWERS.map((ans, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-3' : ''}>
                  <div className="text-xs font-bold text-workbook-navy dark:text-zinc-200 mb-0.5">
                    {ans.q}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {ans.a}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: Ready for Review */}
      <section id="ready-for-review" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-4">
          Ready for Review
        </h2>

        {/* Pale-Orange Callout with slim orange left border */}
        <div className="p-5 sm:p-6 rounded-r-xl rounded-l-md border-l-4 border-workbook-orange border-y border-r border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-workbook-orange shrink-0 mt-0.5" />
            <div className="space-y-3 w-full">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-amber-900 dark:text-amber-300">
                READY FOR REVIEW
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-zinc-200 font-medium">
                This workbook includes illustrative architecture and screenshot-target diagrams, not screenshots captured from the organisers' live AWS account. Complete a live deployment and replace or add account-specific screenshots before distributing it as the final event handout.
              </p>

              <div className="pt-3 border-t border-amber-200/80 dark:border-amber-900/50">
                <div className="text-xs font-bold text-workbook-navy dark:text-zinc-100 mb-2">
                  Pre-Distribution Verification Summary:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-zinc-300">
                  {REVIEW_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-workbook-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'further-learning',
          title: 'Official AWS documentation to keep learning',
          pageLabel: 'Chapter 08',
        }}
        next={{
          id: 'overview',
          title: 'Workshop Overview',
          pageLabel: 'Return to Start',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}