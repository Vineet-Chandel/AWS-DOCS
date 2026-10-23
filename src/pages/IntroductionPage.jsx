import React from 'react';
import { Breadcrumbs } from '../components/documentation/Breadcrumbs';
import { DeploymentFlow } from '../components/documentation/DeploymentFlow';
import { LearningPhases } from '../components/documentation/LearningPhases';
import { FinishLineCallout } from '../components/documentation/FinishLineCallout';
import { WorkshopTimeline } from '../components/documentation/WorkshopTimeline';
import { NetworkFlow } from '../components/documentation/NetworkFlow';
import { WorkshopComparison } from '../components/documentation/WorkshopComparison';
import { NextLessonNav } from '../components/documentation/NextLessonNav';
import { Clock, Shield, Sparkles, Layers } from 'lucide-react';

/**
 * Headings outline exported for the dynamic Right Table of Contents ("On this page")
 */
export const INTRODUCTION_HEADINGS = [
  { id: 'from-repository-to-live-website', text: 'From Repository to Live Website', level: 2 },
  { id: 'three-steps-to-your-first-deployment', text: 'Three Steps to Your First Deployment', level: 2 },
  { id: 'the-finish-line', text: 'The Finish Line', level: 2 },
  { id: 'suggested-120-minute-run-plan', text: 'Suggested 120-Minute Run Plan', level: 2 },
  { id: 'how-visitors-reach-your-website', text: 'How Visitors Reach Your Website', level: 2 },
  { id: 'how-you-connect-to-the-server', text: 'How You Connect to the Server', level: 2 },
  { id: 'what-this-workshop-uses', text: 'What This Workshop Uses', level: 2 },
  { id: 'your-deployment-journey', text: 'Your Deployment Journey', level: 2 },
  { id: 'ready-to-begin', text: 'Ready to Begin?', level: 2 },
];

export function IntroductionPage({ onNavigate = () => {} }) {
  const breadcrumbItems = [
    { id: 'overview', label: 'Introduction' },
    { id: 'overview', label: 'Overview' },
  ];

  return (
    <article className="max-w-[840px] mx-auto px-4 sm:px-8 py-8 lg:py-10">
      {/* SECTION 1: PAGE HEADER */}
      <header className="mb-10">
        <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

        {/* Eyebrow from Reference Image 1 */}
        <div className="text-xs sm:text-sm font-bold font-sans tracking-wide uppercase text-amber-600 dark:text-amber-500 mb-2.5 select-none">
          THE PRACTICAL AWS STARTER
        </div>

        {/* Main Heading - Editorial Serif */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-navy-950 dark:text-zinc-50 tracking-tight leading-[1.15] mb-4">
          Deploy your first website to AWS
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-zinc-300 font-serif italic leading-relaxed mb-6">
          A visual, step-by-step workbook for the 2-hour AWS Cloud Launchpad workshop.
        </p>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 pb-4 border-b border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 select-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Beginner-friendly
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            ~120 minutes
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 font-medium">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            Static website deployment
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 font-medium">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            Hands-on learning
          </span>
        </div>
      </header>

      {/* SECTION 2: FROM REPOSITORY TO LIVE WEBSITE */}
      <section className="mb-12 scroll-mt-20" id="from-repository-to-live-website">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3">
          From Repository to Live Website
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
          Every website deployment follows a pipeline that connects source code on your local computer to a publicly reachable web server in the cloud. The diagram below illustrates how each component fits together in our architecture:
        </p>

        <DeploymentFlow />
      </section>

      {/* SECTION 3: THREE STEPS TO YOUR FIRST DEPLOYMENT */}
      <section className="mb-12 scroll-mt-20" id="three-steps-to-your-first-deployment">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3">
          Three Steps to Your First Deployment
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          The workshop breaks the cloud learning curve into three bite-sized, sequential phases. You start by building intuition, progress through guided server construction, and finish by proving your site works.
        </p>

        <LearningPhases />
      </section>

      {/* SECTION 4: THE FINISH LINE */}
      <section className="mb-12 scroll-mt-20" id="the-finish-line">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3">
          The Finish Line
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          Before typing your first command, keep the final objective in mind. Our goal is tangible operational capability, not abstract theory:
        </p>

        <FinishLineCallout />
      </section>

      {/* SECTION 5: SUGGESTED 120-MINUTE RUN PLAN */}
      <section className="mb-12 scroll-mt-20" id="suggested-120-minute-run-plan">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 dark:text-zinc-100 mb-3">
          Suggested 120-Minute Run Plan
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          Here is how the 2-hour session is structured. Each milestone provides dedicated time for building, verifying, and practicing independently:
        </p>

        <WorkshopTimeline />
      </section>

      {/* SECTION 6 & 7: NETWORKING FLOWS (VISITOR & ADMIN) */}
      <section className="mb-12">
        <NetworkFlow />
      </section>

      {/* SECTION 8: WHAT THIS WORKSHOP USES & DOESN'T */}
      <section className="mb-12">
        <WorkshopComparison />
      </section>

      {/* SECTION 9 & 10: DEPLOYMENT JOURNEY & NEXT LESSON NAV */}
      <section className="mb-12">
        <NextLessonNav onNavigate={onNavigate} />
      </section>
    </article>
  );
}
