import React, { useState } from 'react';
import { AppHeader } from './components/layout/AppHeader';
import { Sidebar } from './components/layout/Sidebar';
import { RightTableOfContents } from './components/layout/RightTableOfContents';
import { ReadingProgress } from './components/ReadingProgress';
import { DocumentSearch } from './components/DocumentSearch';
import { BackToTop } from './components/BackToTop';

import { IntroductionPage, INTRODUCTION_HEADINGS } from './pages/IntroductionPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

import { useTheme } from './hooks/useTheme';

export function App() {
  const [activePage, setActivePage] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-150">
      {/* Sticky Top Header */}
      <AppHeader
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
        onOpenSearch={() => setIsSearchOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigateHome={() => handleNavigate('overview')}
      />

      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Main 3-Column Documentation Container */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        {/* Column 1: Left Global Navigation Sidebar */}
        <Sidebar
          activePage={activePage}
          onSelectPage={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Column 2: Central Documentation Reading Surface */}
        <main className="flex-1 min-w-0 lg:pl-64 transition-all duration-150">
          <div className="flex flex-col min-h-full">
            {activePage === 'overview' ? (
              <IntroductionPage onNavigate={handleNavigate} />
            ) : (
              <PlaceholderPage pageId={activePage} onNavigate={handleNavigate} />
            )}

            {/* Document Article Footer */}
            <footer className="max-w-[840px] mx-auto w-full px-4 sm:px-8 py-8 mt-auto border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-zinc-300">
                  AWS Cloud Launchpad
                </span>
                <span>•</span>
                <span>2-Hour Deployment Workbook</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-slate-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
                >
                  Return to top
                </button>
              </div>
            </footer>
          </div>
        </main>

        {/* Column 3: Right "On this page" Local Table of Contents */}
        {activePage === 'overview' && (
          <RightTableOfContents headings={INTRODUCTION_HEADINGS} />
        )}
      </div>

      {/* Floating Back-to-Top Control */}
      <BackToTop />

      {/* Full-text Search Modal */}
      <DocumentSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(item) => {
          handleNavigate('overview');
        }}
      />
    </div>
  );
}

export default App;
