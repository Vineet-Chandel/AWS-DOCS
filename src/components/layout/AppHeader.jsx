import React from 'react';
import { Menu, X, Sun, Moon, Search, Terminal, BookOpen } from 'lucide-react';

/**
 * Clean, compact application header following Reference Image 2.
 */
export function AppHeader({
  onToggleSidebar = () => {},
  isSidebarOpen = false,
  onOpenSearch = () => {},
  theme = 'light',
  onToggleTheme = () => {},
  onNavigateHome = () => {},
}) {
  return (
    <header className="sticky top-0 z-30 h-14 w-full border-b border-slate-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Section: Mobile Menu + Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-900 lg:hidden focus:outline-none"
            aria-label={isSidebarOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-zinc-100 dark:text-navy-950 shadow-xs">
              <Terminal className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold tracking-tight text-navy-950 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                AWS Cloud Launchpad
              </span>
              <span className="hidden sm:inline-block rounded border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 px-1.5 py-0.5 text-[10px] font-mono font-medium tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
                DEPLOYMENT WORKBOOK
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Bar Trigger */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between h-9 px-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/60 text-slate-400 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors text-xs focus:outline-none"
            aria-label="Search documentation"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search workbook...</span>
            </div>
            <kbd className="text-[10px] font-mono bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-zinc-700 text-slate-400 dark:text-zinc-400">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Section: Mobile Search & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Icon */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-900 md:hidden focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
