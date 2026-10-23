import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

/**
 * Standard chapter header displaying the consistent chapter indicator,
 * breadcrumbs, editorial title, and short introduction.
 */
export function ChapterHeader({
  chapterNumber = '01',
  chapterTitle = 'INTRODUCTION & PREREQUISITES',
  pageNumber = 1,
  totalPages = 4,
  title,
  intro,
  breadcrumbItems = [],
  onNavigate = () => {},
}) {
  return (
    <header className="mb-8">
      <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

      {/* Chapter Indicator: 01 / INTRODUCTION & PREREQUISITES • 1 OF 4 */}
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-workbook-orange mb-3 select-none">
        <span>{chapterNumber} / {chapterTitle}</span>
        {totalPages && totalPages > 1 && (
          <>
            <span>•</span>
            <span>{pageNumber} OF {totalPages}</span>
          </>
        )}
      </div>

      {/* Main Title - Editorial Serif */}
      <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-workbook-navy dark:text-zinc-50 tracking-tight leading-[1.18] mb-4">
        {title}
      </h1>

      {/* Introductory Lead */}
      {intro && (
        <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-300 font-serif leading-relaxed mb-6">
          {intro}
        </p>
      )}

      {/* Subtle Divider */}
      <div className="border-b border-workbook-border dark:border-zinc-800" />
    </header>
  );
}
