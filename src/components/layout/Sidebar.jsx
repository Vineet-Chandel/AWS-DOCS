import React, { useEffect } from 'react';
import {
  BookOpen,
  CheckCircle2,
  FolderTree,
  ShieldCheck,
  Cloud,
  Server,
  Terminal,
  Globe,
  ShieldAlert,
  Cpu,
  Key,
  Settings,
  UploadCloud,
  ExternalLink,
  AlertTriangle,
  ListChecks,
  Flame,
  Lock,
  DollarSign,
  Compass,
  X,
  FileText,
} from 'lucide-react';
import { WORKBOOK_SECTIONS } from '../../data/navigation';

const ICON_MAP = {
  BookOpen,
  CheckCircle2,
  FolderTree,
  ShieldCheck,
  Cloud,
  Server,
  Terminal,
  Globe,
  ShieldAlert,
  Cpu,
  Key,
  Settings,
  UploadCloud,
  ExternalLink,
  AlertTriangle,
  ListChecks,
  Flame,
  Lock,
  DollarSign,
  Compass,
};

export function Sidebar({
  activePage = 'intro-deployment',
  onSelectPage = () => {},
  isOpen = false,
  onClose = () => {},
}) {
  // Close drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll on mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleItemClick = (id) => {
    onSelectPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  // Only display sections and items that are fully created
  const activeSections = WORKBOOK_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) => item.status === 'ready'),
  })).filter((section) => section.items.length > 0);

  const totalLessons = activeSections.reduce((acc, sec) => acc + sec.items.length, 0);

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-900/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation Panel */}
      <aside
        id="global-sidebar"
        aria-label="Global Documentation Navigation"
        className={`fixed top-14 bottom-0 z-40 w-64 flex flex-col bg-white dark:bg-zinc-950 border-r border-slate-200 dark:border-zinc-800 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0 left-0 shadow-2xl lg:shadow-none' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile Header in Drawer */}
        <div className="flex items-center justify-between p-3.5 border-b border-slate-100 dark:border-zinc-800 lg:hidden">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
            Documentation Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Groups */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-5 custom-scrollbar text-xs">
          {activeSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-2.5 py-1 text-[11px] font-bold tracking-wider text-slate-400 dark:text-zinc-500 uppercase select-none">
                {section.title}
              </div>

              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = activePage === item.id || (activePage === 'overview' && item.id === 'intro-deployment');
                  const Icon = ICON_MAP[item.icon] || FileText;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-2.5 rounded-lg text-left transition-colors group relative ${
                        isActive
                          ? 'bg-slate-100 dark:bg-zinc-800/90 text-navy-950 dark:text-zinc-100 font-semibold'
                          : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:text-slate-900 dark:hover:text-zinc-200'
                      }`}
                    >
                      {/* Active Indicator Strip */}
                      {isActive && (
                        <span
                          className="absolute left-0 top-2 bottom-2 w-1 bg-workbook-blue rounded-r"
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive
                              ? 'text-workbook-blue dark:text-blue-400'
                              : 'text-slate-400 group-hover:text-slate-600 dark:text-zinc-500 dark:group-hover:text-zinc-300'
                          }`}
                        />
                        <span className="truncate leading-snug">{item.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-100 dark:border-zinc-800 text-[11px] text-slate-400 dark:text-zinc-500 flex items-center justify-between">
          <span className="font-medium">{totalLessons} Lessons Available</span>
          <span className="font-mono text-[10px] bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
            v1.0.0
          </span>
        </div>
      </aside>
    </>
  );
}
