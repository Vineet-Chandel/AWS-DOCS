import React, { useState } from 'react';
import { ChapterHeader } from '../../components/documentation/ChapterHeader';
import { ChapterPagination } from '../../components/documentation/ChapterPagination';
import {
  CheckCircle2,
  Check,
  RotateCcw,
  Sparkles,
  Info,
  ShieldCheck,
  Camera,
  Globe,
  FileQuestion,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export const INDEPENDENT_CHECKLIST_HEADINGS = [
  { id: 'independent-checklist', text: 'Independent Deployment Checklist', level: 2 },
  { id: 'submission-requirements', text: 'Submission Requirements', level: 2 },
  { id: 'mentor-scoring-idea', text: 'Mentor Scoring Idea', level: 2 },
  { id: 'stretch-goal', text: 'Stretch Goal', level: 2 },
];

const CHECKLIST_TASKS = [
  'Inspect the repository and identify the homepage, stylesheet, scripts, and other pages.',
  'Confirm the AWS account, Region, instance, and network settings are ready.',
  'Connect to the instance using an authorised method.',
  'Ensure the required web server is installed and running.',
  'Deploy only the public website files into the correct web directory.',
  'Check that CSS, JavaScript, images, and links load correctly.',
  'Open the public URL in a separate browser or device.',
  'Test the homepage and About page; investigate custom 404 behaviour.',
  'Capture evidence showing the running instance and deployed website.',
  'Identify the resources created and prepare to clean them up safely.',
];

export function IndependentChecklistPage({ onNavigate = () => {} }) {
  const [checkedItems, setCheckedItems] = useState(
    CHECKLIST_TASKS.reduce((acc, _, idx) => ({ ...acc, [idx]: false }), {})
  );

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkAll = () => {
    const all = {};
    CHECKLIST_TASKS.forEach((_, idx) => {
      all[idx] = true;
    });
    setCheckedItems(all);
  };

  const resetAll = () => {
    const all = {};
    CHECKLIST_TASKS.forEach((_, idx) => {
      all[idx] = false;
    });
    setCheckedItems(all);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_TASKS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const breadcrumbs = [
    { id: 'intro-deployment', label: 'AWS Cloud Launchpad' },
    { id: 'challenge-project-two', label: '05 / Independent Challenge' },
    { id: 'challenge-checklist', label: 'Independent Checklist' },
  ];

  const scoringCriteria = [
    {
      title: '1 POINT',
      category: 'DEPLOY',
      desc: 'Site deploys and the public URL works.',
      color: 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
    },
    {
      title: '1 POINT',
      category: 'NAVIGATE',
      desc: 'Home/About navigation behaves as expected.',
      color: 'border-blue-300 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-300',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
    },
    {
      title: '1 POINT',
      category: 'ASSETS',
      desc: 'Styles and assets render correctly.',
      color: 'border-teal-300 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-300',
      badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200',
    },
    {
      title: '1 POINT',
      category: 'UNDERSTAND',
      desc: 'Student explains one debugging step and one cleanup item.',
      color: 'border-purple-300 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-300',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
    },
  ];

  return (
    <article className="max-w-[840px] mx-auto w-full px-4 sm:px-8 py-8 md:py-12">
      {/* Chapter Indicator & Editorial Title */}
      <ChapterHeader
        chapterNumber="05"
        chapterTitle="INDEPENDENT DEPLOYMENT CHALLENGE"
        pageNumber={2}
        totalPages={2}
        title="Independent checklist — hints, not the complete solution"
        intro="Tick each item as you finish it. Ask the mentor for a hint only after you can explain what you tried and what the output showed."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: Independent Deployment Checklist */}
      <section id="independent-checklist" className="scroll-mt-24 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
              Independent Deployment Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1">
              Work through each task independently. Track your progress with these milestones.
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

        {/* Progress Banner */}
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
                  ? 'All 10 Tasks Completed!'
                  : `${completedCount} of ${totalCount} tasks completed`}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                {completedCount === totalCount
                  ? 'Ready for submission and mentor assessment.'
                  : 'Follow the checklist sequence to verify each layer.'}
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
              {progressPercent}% completed
            </div>
          </div>
        </div>

        {/* 10 Vertical Checklist Items */}
        <div className="space-y-2.5">
          {CHECKLIST_TASKS.map((task, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <label
                key={idx}
                htmlFor={`task-${idx}`}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 shadow-2xs'
                    : 'border-workbook-border bg-white dark:border-zinc-800 dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                <input
                  type="checkbox"
                  id={`task-${idx}`}
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
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-zinc-500">
                      STEP {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span
                    className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                      isChecked
                        ? 'text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/50'
                        : 'text-slate-800 dark:text-zinc-200'
                    }`}
                  >
                    {task}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Submission Requirements */}
      <section id="submission-requirements" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Submission requirements
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mb-5">
          Submit the following deliverables to demonstrate complete independent deployment:
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs">
            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-workbook-blue shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1">
                  Live URL
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  The public address of your deployed website (in the format <code className="font-mono bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">http://YOUR_PUBLIC_IP</code>). Submit the actual reachable URL of your EC2-hosted project.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs">
            <div className="flex items-start gap-3">
              <Camera className="w-4 h-4 text-workbook-green shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1">
                  Evidence
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-2">
                  A screenshot showing the website in the browser and its URL. Capture your real deployed site with the public IPv4 address clearly visible in the browser address bar.
                </p>
                <p className="text-[11px] text-amber-800 dark:text-amber-300/90 italic bg-amber-50 dark:bg-amber-950/40 p-2 rounded border border-amber-200 dark:border-amber-900/50">
                  <strong>Important:</strong> Remove or obscure sensitive account information before sharing screenshots. Private keys, passwords, AWS access keys, and session tokens must never be included.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-2xs">
            <div className="flex items-start gap-3">
              <FileQuestion className="w-4 h-4 text-workbook-purple shrink-0 mt-0.5" />
              <div className="w-full">
                <h3 className="text-sm font-bold text-workbook-navy dark:text-zinc-100 mb-1">
                  Reflection Questions
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-3">
                  Be prepared to discuss your answers with the mentor:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-zinc-300 list-disc list-inside">
                  <li><strong>Which issue took the longest to fix?</strong></li>
                  <li><strong>How did you verify that your website was working?</strong></li>
                  <li><strong>Which AWS resources did you create, and which of them need cleanup?</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mentor Scoring Idea */}
      <section id="mentor-scoring-idea" className="scroll-mt-24 mb-14">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight">
            Mentor scoring idea
          </h2>
          <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-400 uppercase">
            MAX 4 POINTS
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mb-5">
          An illustrative assessment rubric mentors can use to review your completed deployment challenge:
        </p>

        {/* 2x2 Grid with 1 POINT Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {scoringCriteria.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-xl border ${item.color} flex flex-col justify-between shadow-2xs`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.badgeColor}`}>
                    {item.category}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Stretch Goal */}
      <section id="stretch-goal" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-4">
          Stretch Goal
        </h2>

        {/* Pale-Blue Callout with narrow blue left border */}
        <div className="p-5 rounded-r-xl rounded-l-md border-l-4 border-workbook-blue border-y border-r border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-workbook-blue shrink-0 mt-0.5" />
            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-blue-900 dark:text-blue-300">
                STRETCH GOAL
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-zinc-200">
                Configure the server to serve the included custom 404 page for missing paths. The repository contains the file, but default Nginx configuration does not necessarily use it automatically.
              </p>
              <div className="pt-2 border-t border-blue-200/80 dark:border-blue-900/50 text-xs text-slate-700 dark:text-zinc-300 space-y-1">
                <div className="font-bold text-workbook-navy dark:text-blue-200">
                  Discussion Question:
                </div>
                <p className="italic">
                  "What change did you make to the Nginx configuration, and how did you verify that a missing URL returns the intended error page?"
                </p>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 pt-1">
                  Always validate configuration syntax with <code className="font-mono bg-white dark:bg-zinc-800 px-1 py-0.5 rounded">sudo nginx -t</code> before reloading Nginx, and test both valid routes and nonexistent paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'challenge-project-two',
          title: 'Project 2: deploy a multi-page website',
          pageLabel: 'Page 1 of 2',
        }}
        next={{
          id: 'security-and-permissions',
          title: 'Build safe cloud habits from the beginning',
          pageLabel: 'Chapter 06',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}