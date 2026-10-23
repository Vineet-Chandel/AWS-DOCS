import React, { useState, useEffect, useMemo } from 'react';
import { AppHeader } from './components/layout/AppHeader';
import { Sidebar } from './components/layout/Sidebar';
import { RightTableOfContents } from './components/layout/RightTableOfContents';
import { ReadingProgress } from './components/ReadingProgress';
import { DocumentSearch } from './components/DocumentSearch';
import { BackToTop } from './components/BackToTop';

// Introduction Overview Page
import { IntroductionPage, INTRODUCTION_HEADINGS } from './pages/IntroductionPage';

// Chapter 1 Pages
import { DeploymentOverviewPage, PAGE_1_HEADINGS } from './pages/DeploymentOverviewPage';
import { Ec2ArchitecturePage, PAGE_2_HEADINGS } from './pages/Ec2ArchitecturePage';
import { AwsServicesPage, PAGE_3_HEADINGS } from './pages/AwsServicesPage';
import { PreflightPage, PAGE_4_HEADINGS } from './pages/PreflightPage';

// Chapter 2 Pages
import { InspectAndLaunchPage, DEPLOY_PAGE_1_HEADINGS } from './pages/step-by-step-deployment/InspectAndLaunchPage';
import { NetworkingPage, DEPLOY_PAGE_2_HEADINGS } from './pages/step-by-step-deployment/NetworkingPage';
import { ConnectAndInstallPage, DEPLOY_PAGE_3_HEADINGS } from './pages/step-by-step-deployment/ConnectAndInstallPage';
import { DeployAndVerifyPage, DEPLOY_PAGE_4_HEADINGS } from './pages/step-by-step-deployment/DeployAndVerifyPage';

// Chapter 3 Pages
import { VerificationChecklistPage, VERIFICATION_PAGE_HEADINGS } from './pages/VerificationChecklistPage';

// Chapter 4 Pages
import { CommonErrorsPage, COMMON_ERRORS_PAGE_HEADINGS } from './pages/troubleshooting/CommonErrorsPage';
import { DebuggingToolkitPage, DEBUGGING_TOOLKIT_HEADINGS } from './pages/troubleshooting/DebuggingToolkitPage';

// Chapter 5 Pages
import { ProjectTwoPage, PROJECT_TWO_PAGE_HEADINGS } from './pages/independent-challenge/ProjectTwoPage';
import { IndependentChecklistPage, INDEPENDENT_CHECKLIST_HEADINGS } from './pages/independent-challenge/IndependentChecklistPage';

// Chapter 6 Pages
import { SecurityAndPermissionsPage, SECURITY_PAGE_HEADINGS } from './pages/SecurityAndPermissionsPage';

// Chapter 7 Pages
import { CostAwarenessAndCleanupPage, COST_AND_CLEANUP_HEADINGS } from './pages/CostAwarenessAndCleanupPage';

// Chapter 8 Pages
import { FurtherLearningResourcesPage, FURTHER_LEARNING_HEADINGS } from './pages/FurtherLearningResourcesPage';

// Chapter 9 Pages
import { InstructorOrganiserChecklistPage, INSTRUCTOR_CHECKLIST_HEADINGS } from './pages/InstructorOrganiserChecklistPage';

import { PlaceholderPage } from './pages/PlaceholderPage';
import { useTheme } from './hooks/useTheme';

const VALID_PAGES = [
  'overview',
  'intro-deployment',
  'intro-ec2-architecture',
  'intro-aws-services',
  'intro-preflight',
  'deploy-inspect-and-launch',
  'deploy-networking',
  'deploy-connect-and-install',
  'deploy-and-verify',
  'verification-checklist',
  'troubleshoot-common-errors',
  'troubleshoot-debugging-toolkit',
  'challenge-project-two',
  'challenge-checklist',
  'security-and-permissions',
  'cost-and-cleanup',
  'further-learning',
  'instructor-checklist',
];

export function App() {
  // Initialize page from URL hash if present, default to overview
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (VALID_PAGES.includes(hash)) {
        return hash;
      }
      if (hash === '' || hash === 'overview') {
        return 'overview';
      }
      if (hash) {
        return hash;
      }
    }
    return 'overview';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  // Listen to browser popstate / hashchange (back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash && hash !== activePage && !hash.includes('-vs-') && !hash.includes('-in-')) {
        if (VALID_PAGES.includes(hash)) {
          setActivePage(hash);
        } else if (hash === 'overview') {
          setActivePage('overview');
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  const handleNavigate = (pageId) => {
    const target = pageId || 'overview';
    setActivePage(target);
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine which page component and headings to render
  const { pageComponent, currentHeadings } = useMemo(() => {
    switch (activePage) {
      // Introduction: Workshop Overview
      case 'overview':
        return {
          pageComponent: <IntroductionPage onNavigate={handleNavigate} />,
          currentHeadings: INTRODUCTION_HEADINGS,
        };

      // Chapter 1: Introduction & Prerequisites
      case 'intro-deployment':
        return {
          pageComponent: <DeploymentOverviewPage onNavigate={handleNavigate} />,
          currentHeadings: PAGE_1_HEADINGS,
        };
      case 'intro-ec2-architecture':
        return {
          pageComponent: <Ec2ArchitecturePage onNavigate={handleNavigate} />,
          currentHeadings: PAGE_2_HEADINGS,
        };
      case 'intro-aws-services':
        return {
          pageComponent: <AwsServicesPage onNavigate={handleNavigate} />,
          currentHeadings: PAGE_3_HEADINGS,
        };
      case 'intro-preflight':
        return {
          pageComponent: <PreflightPage onNavigate={handleNavigate} />,
          currentHeadings: PAGE_4_HEADINGS,
        };

      // Chapter 2: Step-by-Step Deployment
      case 'deploy-inspect-and-launch':
        return {
          pageComponent: <InspectAndLaunchPage onNavigate={handleNavigate} />,
          currentHeadings: DEPLOY_PAGE_1_HEADINGS,
        };
      case 'deploy-networking':
        return {
          pageComponent: <NetworkingPage onNavigate={handleNavigate} />,
          currentHeadings: DEPLOY_PAGE_2_HEADINGS,
        };
      case 'deploy-connect-and-install':
        return {
          pageComponent: <ConnectAndInstallPage onNavigate={handleNavigate} />,
          currentHeadings: DEPLOY_PAGE_3_HEADINGS,
        };
      case 'deploy-and-verify':
        return {
          pageComponent: <DeployAndVerifyPage onNavigate={handleNavigate} />,
          currentHeadings: DEPLOY_PAGE_4_HEADINGS,
        };

      // Chapter 3: Verification Checklist
      case 'verification-checklist':
        return {
          pageComponent: <VerificationChecklistPage onNavigate={handleNavigate} />,
          currentHeadings: VERIFICATION_PAGE_HEADINGS,
        };

      // Chapter 4: Troubleshooting Guide
      case 'troubleshoot-common-errors':
        return {
          pageComponent: <CommonErrorsPage onNavigate={handleNavigate} />,
          currentHeadings: COMMON_ERRORS_PAGE_HEADINGS,
        };
      case 'troubleshoot-debugging-toolkit':
        return {
          pageComponent: <DebuggingToolkitPage onNavigate={handleNavigate} />,
          currentHeadings: DEBUGGING_TOOLKIT_HEADINGS,
        };

      // Chapter 5: Independent Deployment Challenge
      case 'challenge-project-two':
        return {
          pageComponent: <ProjectTwoPage onNavigate={handleNavigate} />,
          currentHeadings: PROJECT_TWO_PAGE_HEADINGS,
        };
      case 'challenge-checklist':
        return {
          pageComponent: <IndependentChecklistPage onNavigate={handleNavigate} />,
          currentHeadings: INDEPENDENT_CHECKLIST_HEADINGS,
        };

      // Chapter 6: Security and Permissions
      case 'security-and-permissions':
        return {
          pageComponent: <SecurityAndPermissionsPage onNavigate={handleNavigate} />,
          currentHeadings: SECURITY_PAGE_HEADINGS,
        };

      // Chapter 7: Cost Awareness and Resource Cleanup
      case 'cost-and-cleanup':
        return {
          pageComponent: <CostAwarenessAndCleanupPage onNavigate={handleNavigate} />,
          currentHeadings: COST_AND_CLEANUP_HEADINGS,
        };

      // Chapter 8: Further Learning Resources
      case 'further-learning':
        return {
          pageComponent: <FurtherLearningResourcesPage onNavigate={handleNavigate} />,
          currentHeadings: FURTHER_LEARNING_HEADINGS,
        };

      // Chapter 9: Instructor and Organiser Checklist
      case 'instructor-checklist':
        return {
          pageComponent: <InstructorOrganiserChecklistPage onNavigate={handleNavigate} />,
          currentHeadings: INSTRUCTOR_CHECKLIST_HEADINGS,
        };

      default:
        return {
          pageComponent: <PlaceholderPage pageId={activePage} onNavigate={handleNavigate} />,
          currentHeadings: [],
        };
    }
  }, [activePage]);

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
            {pageComponent}

            {/* Document Article Footer */}
            <footer className="max-w-[840px] mx-auto w-full px-4 sm:px-8 py-8 mt-auto border-t border-workbook-border dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-workbook-navy dark:text-zinc-300">
                  AWS Cloud Launchpad
                </span>
                <span>•</span>
                <span>Deploy Your First Website to AWS</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-workbook-navy dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
                >
                  Return to top
                </button>
              </div>
            </footer>
          </div>
        </main>

        {/* Column 3: Right "On this page" Local Table of Contents */}
        {currentHeadings.length > 0 && (
          <RightTableOfContents headings={currentHeadings} />
        )}
      </div>

      {/* Floating Back-to-Top Control */}
      <BackToTop />

      {/* Full-text Search Modal */}
      <DocumentSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(item) => {
          if (item.pageId) {
            handleNavigate(item.pageId);
          }
        }}
      />
    </div>
  );
}

export default App;