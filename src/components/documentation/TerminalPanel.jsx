import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

/**
 * Reusable terminal command panel supporting environment distinction
 * (e.g. RUN ON YOUR LAPTOP vs RUN INSIDE THE SSH SESSION) and clipboard copying.
 */
export function TerminalPanel({
  label = 'TERMINAL',
  commands = '',
  description = null,
  isLaptop = false,
  isSsh = false,
  className = '',
}) {
  const [copied, setCopied] = useState(false);

  // Normalize commands to clean string
  const commandText = Array.isArray(commands) ? commands.join('\n') : String(commands).trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commandText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  // Determine badge styling based on environment
  let badgeColor = 'text-workbook-orange';
  if (isLaptop) {
    badgeColor = 'text-workbook-orange';
  } else if (isSsh) {
    badgeColor = 'text-amber-400';
  }

  return (
    <div className={`rounded-xl border border-slate-700 bg-workbook-navy text-slate-100 overflow-hidden shadow-md my-4 ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-950/90 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2 min-w-0 pr-2">
          <Terminal className={`w-3.5 h-3.5 shrink-0 ${badgeColor}`} />
          <span className={`font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider truncate ${badgeColor}`}>
            {label}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none shrink-0"
          aria-label={copied ? 'Commands copied to clipboard' : 'Copy terminal commands'}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] text-emerald-400 font-mono font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px] font-mono text-slate-300">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Command Content */}
      <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto custom-scrollbar">
        <pre className="m-0 p-0 bg-transparent text-emerald-400 whitespace-pre">
          {commandText}
        </pre>
      </div>

      {/* Optional helper note below commands */}
      {description && (
        <div className="px-4 py-2 bg-navy-950/40 border-t border-slate-800/80 text-[11px] font-sans text-slate-400">
          {description}
        </div>
      )}
    </div>
  );
}
