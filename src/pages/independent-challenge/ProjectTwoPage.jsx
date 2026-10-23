import React from 'react';
import { ChapterHeader } from '../../components/documentation/ChapterHeader';
import { ChapterPagination } from '../../components/documentation/ChapterPagination';
import {
  ExternalLink,
  FolderGit2,
  Server,
  Globe,
  FileCode2,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Compass,
} from 'lucide-react';

export const PROJECT_TWO_PAGE_HEADINGS = [
  { id: 'repository-link', text: 'Repository Link', level: 2 },
  { id: 'expected-source-structure', text: 'Expected Source Structure', level: 2 },
  { id: 'expected-outcome', text: 'Expected Outcome', level: 2 },
  { id: 'challenge-rule', text: 'Challenge Rule', level: 2 },
];

export function ProjectTwoPage({ onNavigate = () => {} }) {
  const breadcrumbs = [
    { id: 'intro-deployment', label: 'AWS Cloud Launchpad' },
    { id: 'challenge-project-two', label: '05 / Independent Challenge' },
    { id: 'challenge-project-two', label: 'Project 2: Deploy a Multi-Page Website' },
  ];

  const outcomes = [
    {
      title: 'Running EC2',
      badge: 'INFRASTRUCTURE',
      desc: 'A workshop EC2 instance serves the second project.',
      color: 'border-blue-300 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-300',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
      icon: Server,
    },
    {
      title: 'Public live URL',
      badge: 'ACCESSIBLE',
      desc: 'A URL in the form http://YOUR_PUBLIC_IP opens from a separate browser or device.',
      color: 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      icon: Globe,
    },
    {
      title: 'Multi-page content',
      badge: 'FUNCTIONAL',
      desc: 'The homepage and About page work, while styling and linked assets load correctly.',
      color: 'border-teal-300 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-300',
      badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200',
      icon: FileCode2,
    },
    {
      title: 'Custom 404 behaviour',
      badge: 'STRETCH',
      desc: '404.html is present. Serving it automatically for missing routes may require Nginx configuration.',
      color: 'border-purple-300 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-300',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
      icon: Sparkles,
    },
  ];

  return (
    <article className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 md:py-12">
      {/* Chapter Indicator & Editorial Title */}
      <ChapterHeader
        chapterNumber="05"
        chapterTitle="INDEPENDENT DEPLOYMENT CHALLENGE"
        pageNumber={1}
        totalPages={2}
        title="Project 2: deploy a multi-page website"
        intro="Mission: use the EC2 + Amazon Linux 2023 + Nginx approach from the guided build, but make the decisions yourself. Use hints, your notes and official documentation instead of a click-by-click recipe."
        breadcrumbItems={breadcrumbs}
        onNavigate={onNavigate}
      />

      {/* SECTION 1: Repository Link */}
      <section id="repository-link" className="scroll-mt-24 mb-12">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-3">
          Repository link
        </h2>

        <div className="p-5 rounded-xl border border-workbook-border dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Public GitHub repository
                </span>
                <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-workbook-navy dark:text-zinc-100">
                Maryam-Skaik/static-website-demo
              </div>
            </div>

            <a
              href="https://github.com/Maryam-Skaik/static-website-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-workbook-navy text-white hover:bg-workbook-blue dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-2xs"
            >
              <span>Open Project 2 repository</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-3">
          The repository contains a small static website designed for deployment practice. It includes a homepage, an About page, a custom 404 page, and supporting assets. For this challenge, deploy the public website files to your EC2 server rather than relying on the existing GitHub Pages URL.
        </p>
      </section>

      {/* SECTION 2: Expected Source Structure */}
      <section id="expected-source-structure" className="scroll-mt-24 mb-12">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-3">
          Expected source structure
        </h2>

        {/* Conceptual File Tree Panel */}
        <div className="rounded-xl border border-slate-700 bg-workbook-navy text-slate-100 overflow-hidden shadow-md my-4">
          <div className="flex items-center justify-between px-4 py-2.5 bg-navy-950/90 border-b border-slate-800 text-xs">
            <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-workbook-orange">
              EXPECTED SOURCE STRUCTURE
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              VERIFIED REPOSITORY ASSETS
            </span>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
            <pre>{`static-website-demo/
├── index.html
├── about.html
├── 404.html
├── css/
│   └── style.css
├── js/
│   └── theme.js
├── README.md
└── LICENSE`}</pre>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
          <strong>Note:</strong> <code className="font-mono text-[11px] bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">404.html</code> is an available error-page file, but Nginx does not automatically use it for every missing URL without suitable server configuration.
        </p>
      </section>

      {/* SECTION 3: Expected Outcome */}
      <section id="expected-outcome" className="scroll-mt-24 mb-12">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-2">
          Expected outcome
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mb-5">
          These four core targets define a successful independent deployment:
        </p>

        {/* 2x2 Grid of Educational Cells */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl border ${item.color} flex flex-col justify-between shadow-2xs`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 opacity-70" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-workbook-navy dark:text-zinc-100 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-slate-500 dark:text-zinc-400 mt-3 italic">
          Remember: Replace <code className="font-mono">YOUR_PUBLIC_IP</code> with the actual public IPv4 address assigned to your Amazon EC2 instance.
        </p>
      </section>

      {/* SECTION 4: Challenge Rule */}
      <section id="challenge-rule" className="scroll-mt-24 mb-14">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-workbook-navy dark:text-zinc-100 tracking-tight mb-4">
          Challenge Rule
        </h2>

        {/* Pale-Orange Callout */}
        <div className="p-5 rounded-r-xl rounded-l-md border-l-4 border-workbook-orange border-y border-r border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 text-slate-800 dark:text-zinc-200 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-workbook-orange shrink-0 mt-0.5" />
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-amber-900 dark:text-amber-300">
                CHALLENGE RULE
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-zinc-200">
                You may use this workbook and official AWS documentation. Try to diagnose the issue independently before asking for help. Do not copy the mentor's private key or ask for unrestricted permissions.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                When requesting help, explain what you attempted, which command or browser test you used, what happened, and what you think might be causing the issue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination Navigation */}
      <ChapterPagination
        prev={{
          id: 'troubleshoot-debugging-toolkit',
          title: 'Your first debugging toolkit',
          pageLabel: 'Chapter 04 • Page 2',
        }}
        next={{
          id: 'challenge-checklist',
          title: 'Independent checklist — hints, not the complete solution',
          pageLabel: 'Page 2 of 2',
        }}
        onNavigate={onNavigate}
      />
    </article>
  );
}