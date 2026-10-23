import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Hash, FileText, CornerDownLeft } from 'lucide-react';
import { slugify } from '../utils/slugify';

/**
 * Built-in searchable topics from the AWS Cloud Launchpad Introduction and workbook.
 */
const DEFAULT_TOPICS = [
  {
    heading: 'From Repository to Live Website',
    slug: 'from-repository-to-live-website',
    type: 'heading',
    text: 'Four-stage deployment pipeline: GitHub repository -> Amazon EC2 -> Nginx -> Browser + public IPv4 address.',
  },
  {
    heading: 'Three Steps to Your First Deployment',
    slug: 'three-steps-to-your-first-deployment',
    type: 'heading',
    text: '01 Understand (prerequisites), 02 Deploy (EC2, Nginx, website files), 03 Prove It (verification and debugging).',
  },
  {
    heading: 'The Finish Line',
    slug: 'the-finish-line',
    type: 'heading',
    text: 'Publish a real static website using Amazon EC2, Amazon Linux 2023 and Nginx; verify public URL; diagnose problems; attempt a second project.',
  },
  {
    heading: 'Suggested 120-Minute Run Plan',
    slug: 'suggested-120-minute-run-plan',
    type: 'heading',
    text: '00-15 Kickoff, 15-30 File Tour, 30-65 Build, 65-75 Verify, 75-105 Challenge, 105-120 Wrap.',
  },
  {
    heading: 'How Visitors Reach Your Website',
    slug: 'how-visitors-reach-your-website',
    type: 'heading',
    text: 'Network path: Visitor Browser -> Security Group (HTTP TCP port 80) -> EC2 Public IP -> Nginx -> Website files.',
  },
  {
    heading: 'How You Connect to the Server',
    slug: 'how-you-connect-to-the-server',
    type: 'heading',
    text: 'Administrator path: Your Computer -> SSH (TCP port 22, restricted to your IP) -> EC2 terminal.',
  },
  {
    heading: 'What This Workshop Uses — and What It Doesn’t',
    slug: 'what-this-workshop-uses',
    type: 'heading',
    text: 'What we use: GitHub repo, Amazon EC2, Amazon Linux 2023, Nginx, Public IPv4. What we do not need: database, Node.js server runtime, backend API.',
  },
  {
    heading: 'Your Deployment Journey',
    slug: 'your-deployment-journey',
    type: 'heading',
    text: 'GitHub -> Amazon EC2 (Amazon Linux 2023) -> Nginx -> Public IPv4 URL.',
  },
  {
    heading: 'Ready to Begin?',
    slug: 'ready-to-begin',
    type: 'heading',
    text: 'Next lesson: Getting Started & Prerequisites. Verify AWS account access, configure MFA, and prepare website files.',
  },
];

export function DocumentSearch({ isOpen, onClose, onSelectResult = () => {} }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsListRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches = [];
    for (const item of DEFAULT_TOPICS) {
      const headingMatch = item.heading.toLowerCase().includes(q);
      const textMatch = item.text.toLowerCase().includes(q);

      if (headingMatch || textMatch) {
        matches.push(item);
      }
    }
    return matches;
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle global keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item) => {
    onSelectResult(item);
    if (item.slug) {
      const el = document.getElementById(item.slug);
      if (el) {
        const topOffset = 80;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
        window.history.pushState(null, '', `#${item.slug}`);
      }
    }
    onClose();
  };

  const highlightMatch = (text, q) => {
    if (!q) return text;
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <mark key={i} className="bg-amber-200 dark:bg-amber-900/60 text-slate-900 dark:text-zinc-100 rounded-xs px-0.5 font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-zinc-900/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
    >
      <div
        className="w-full max-w-xl rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search workbook sections, network rules, EC2, Nginx..."
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 p-1"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-slate-200 dark:border-zinc-800 text-slate-400">
            esc
          </span>
        </div>

        {/* Results List */}
        <div ref={resultsListRef} className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          {!query.trim() ? (
            <div className="py-12 text-center text-slate-400 dark:text-zinc-500 text-xs">
              Type keywords to search across the workbook sections (e.g. EC2, Nginx, port 80, SSH, timeline)...
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                No matching results found
              </p>
              <p className="text-xs text-slate-400 dark:text-zinc-500 mt-1">
                No sections match &ldquo;{query}&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                {results.length} {results.length === 1 ? 'match' : 'matches'} found
              </div>
              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={`${item.slug}-${idx}`}
                    type="button"
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-2.5 rounded-lg transition-colors flex items-start gap-3 ${
                      isSelected
                        ? 'bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100'
                        : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    <div className="p-1.5 rounded bg-slate-200/60 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 shrink-0 mt-0.5">
                      <Hash className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-navy-950 dark:text-zinc-100">
                        <span className="truncate">{highlightMatch(item.heading, query.trim())}</span>
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                        {highlightMatch(item.text, query.trim())}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50 text-[11px] text-slate-400 dark:text-zinc-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-slate-200 dark:bg-zinc-800 px-1 rounded text-[10px]">↑</kbd>{' '}
              <kbd className="font-mono bg-slate-200 dark:bg-zinc-800 px-1 rounded text-[10px]">↓</kbd> navigate
            </span>
            <span>
              <kbd className="font-mono bg-slate-200 dark:bg-zinc-800 px-1 rounded text-[10px]">↵</kbd> select
            </span>
          </div>
          <span>AWS Cloud Launchpad</span>
        </div>
      </div>
    </div>
  );
}
